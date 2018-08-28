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

var CombatCtrl = function (entity) {
    Component.call(this, entity);
};

util.inherits(CombatCtrl, Component);
module.exports = CombatCtrl;

var pro = CombatCtrl.prototype;

pro.init = function (opts) {

};

pro.onDamage = function (attacker, damage, sid, broadcast) {
    assert(damage > 0, "onDamage的damage应该大于0");
    if (this.entity.state.isDead())
        return false;
    damage = fightHelper.calcDamage(attacker, this.entity, damage);
    var oriDamage = damage;
    // armor buff 结算
    damage = this.entity.buffCtrl.calcArmorBuff(damage);
    if (damage > 0) {
        if (this.entity.armor >= damage) {
            this.entity.armor -= damage;
        }
        else {
            damage -= this.entity.armor;
            this.entity.armor = 0;
            this.entity.prop.subHp(damage);
        }
    }
    this.emit("EventGetDamaged", this.entity, attacker.id, oriDamage, sid);
    if (broadcast === undefined)
        broadcast = true;
    if (broadcast) {
        // 广播伤害
        this.entity.broadcast('onDamage', {
            targetID: this.entity.id,
            attackerID: attacker.id,
            sid: sid,
            oriDamage: oriDamage,  // 原始伤害
            hp: this.entity.hp,
            armor: this.entity.armor
        })
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
    while (num --) {
        fromHp = entity.hp;
        fromArmor = entity.armor;
        if (this.onDamage(attacker, damage, sid, false)) {
            damageList.push([fromHp, entity.hp, fromArmor, entity.armor])
        }
        else {
            break;
        }
    }
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
    entity.prop.addHp(val);
    this.emit("EventGetHealed", this.entity, caster.id, entity.hp - orginHp, sid);

    this.entity.broadcast('onHeal', {
        casterID: caster.id,
        targetID: entity.id,
        sid: sid,
        fromHp: orginHp,
        toHP: entity.hp,
    })
    return true;
};

pro.onBuffModHp = function (buff, hpVal, casterID, skillID) {
    if (this.entity.state.isDead())
        return;
    var entity = this.entity;
    var orginHp = entity.hp;
    entity.prop.modHp(hpVal);
    this.emit("EventBuffModHp", this.entity, orginHp, entity.hp, casterID, skillID);

    this.entity.broadcast('onBuffModHp', {
        buffID: buff.id,
        casterID: casterID,
        targetID: entity.id,
        fromHp: orginHp,
        toHP: entity.hp,
        val: hpVal
    })
};
