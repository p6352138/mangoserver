/**
 * Date: 2018/7/9
 * Author: liuguolai
 * Description:
 */
var Component = _require('../component');
var util = _require('util');
var assert = _require('assert');
var consts = _require('../../public/consts');
var fightHelper = _require('../../helper/fightHelper');
var entityManager = _require('../../services/entityManager');

var CombatCtrl = function (entity) {
    Component.call(this, entity);
};

util.inherits(CombatCtrl, Component);
module.exports = CombatCtrl;

var pro = CombatCtrl.prototype;

pro.init = function (opts) {
    // 攻击者额外的伤害
    this.attackExtraDamage = {

    }
};

pro.setAttackExtraDamage = function (attackID, damage) {
    this.attackExtraDamage[attackID] = damage;
};

pro.getAttackExtraDamage = function (attackID) {
    return this.attackExtraDamage[attackID] || 0;
};

// 伤害扣护甲，返回剩余伤害
pro.subArmorByDamage = function (damage, noBroadcast=true) {
    // armor buff 结算
    damage = this.entity.buffCtrl.calcArmorBuff(damage);
    if (damage > 0 || !noBroadcast) {
        let leftArmor = this.entity.armor;
        if (leftArmor >= damage) {
            this.entity.prop.modProp('armor', -damage, noBroadcast);
            damage = 0;
        }
        else {
            this.entity.prop.modProp('armor', -leftArmor, noBroadcast);
            damage -= leftArmor;
        }
    }
    return damage;
};

// 注意：非广播时手动添加combo
pro.onDamage = function (attacker, damage, sid, broadcast) {
    assert(damage > 0, "onDamage的damage应该大于0");
    if (this.entity.state.isDead())
        return false;
    // 基础伤害 + 火印伤害*层数 + 恶魔之链传递伤害
    let isCrit = fightHelper.isCrit(attacker);
    damage = fightHelper.calcDamage(attacker, this.entity, damage, isCrit);
    var oriDamage = damage;
    // armor buff 结算
    damage = this.subArmorByDamage(damage);
    let bSubHp = false, orginHp = this.entity.hp;
    if (damage > 0) {
        this.entity.prop.subHp(damage);
        bSubHp = true;
    }
    this.emit("EventGetDamaged", this.entity, attacker.id, oriDamage, sid);
    if (broadcast === undefined)
        broadcast = true;
    if (broadcast) {
        attacker.comboComponent.addCombo();
        // 广播伤害
        let msg = {
            targetID: this.entity.id,
            attackerID: attacker.id,
            sid: sid,
            oriDamage: oriDamage,  // 原始伤害
            hp: this.entity.hp,
            armor: this.entity.armor,
            isCrit: isCrit
        };
        this.entity.broadcast('onDamage', msg);
        this.entity.owner.dps.onDamage(msg);
    }
    if (bSubHp) {
        attacker.combat.onDoDamageToOther(orginHp, this.entity.hp);
    }
    return true;
};

// 计算n次伤害
pro.onDamageWithTimes = function (attacker, damage, sid, num) {
    var damageList = [];
    var entity = this.entity;
    var orginHp = entity.hp;
    var orginArmor = entity.armor;
    var fromHp, fromArmor;
    let comboNum = 0;
    while (num --) {
        fromHp = entity.hp;
        fromArmor = entity.armor;
        if (this.onDamage(attacker, damage, sid, false)) {
            damageList.push([fromHp, entity.hp, fromArmor, entity.armor]);
            comboNum++;
        }
        else {
            break;
        }
    }
    if (comboNum)
        attacker.comboComponent.addCombo(comboNum);
    return {
        orginHp: orginHp,
        orginArmor: orginArmor,
        // [[fromHp, toHp, formArmor, toArmor]...]
        damageList: damageList,
        curHp: entity.hp,
        curArmor: entity.armor
    }
};

pro.onHeal = function (caster, val, sid) {
    if (this.entity.state.isDead())
        return false;
    var entity = this.entity;
    var orginHp = entity.hp;
    let isCrit = fightHelper.isCrit(caster);;
    val = fightHelper.calcHeal(caster, this.entity, val, isCrit);
    entity.prop.addHp(val);
    this.emit("EventGetHealed", this.entity, caster.id, entity.hp - orginHp, sid);

    let msg = {
        casterID: caster.id,
        targetID: entity.id,
        sid: sid,
        fromHp: orginHp,
        toHp: entity.hp,
        isCrit: isCrit
    };
    this.entity.broadcast('onHeal', msg);
    this.entity.owner.dps.onHeal(msg);
    return true;
};

pro._getBuffModHpVal = function (caster, hpVal, isCrit) {
    if (hpVal < 0) {
        return -fightHelper.calcDamage(caster, this.entity, -hpVal, isCrit);
    }
    else {
        return fightHelper.calcHeal(caster, this.entity, hpVal, isCrit);
    }
};

pro.onBuffModHp = function (buff, hpVal, casterID, skillID) {
    if (this.entity.state.isDead())
        return;
    var entity = this.entity;
    let caster = entityManager.getEntity(casterID);
    let isCrit = fightHelper.isCrit(caster);;
    hpVal = this._getBuffModHpVal(caster, hpVal, isCrit);
    var orginHp = entity.hp;
    entity.prop.modHp(hpVal);
    this.emit("EventBuffModHp", this.entity, orginHp, entity.hp, casterID, skillID);
    if (hpVal < 0) {
        caster.comboComponent.addCombo();
    }

    let msg = {
        buffID: buff.id,
        casterID: casterID,
        targetID: entity.id,
        fromHp: orginHp,
        toHp: entity.hp,
        val: hpVal,
        isCrit: isCrit
    }
    this.entity.broadcast('onBuffModHp', msg);
    this.entity.owner.dps.onBuffModHp(msg, skillID);

    if (hpVal < 0) {
        caster.combat.onDoDamageToOther(orginHp, entity.hp);
    }
};

// 对别人造成伤害
pro.onDoDamageToOther = function (enemyFromHp, enemyToHp) {
    this.emit("EventDoDamageToOther", this.entity, enemyFromHp, enemyToHp);
};
