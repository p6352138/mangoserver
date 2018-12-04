/**
 * Date: 2018/11/14
 * Author: liuguolai
 * Description: 战斗卡牌对象
 */
let cardTpl = _require('../data/Card');
let consts = _require('../common/consts');
let utils = _require('../util/utils');
var ObjectId = _require('mongoose').Types.ObjectId;

let CardEntity = function (cardID, opts) {
    this.code = ObjectId();     //唯一标识
    this.cid = cardID;
    this.config = cardTpl[cardID];
    this.lv = 1;
    this.mp = this.config.CastMP;
    this.genTime = new Date().getTime();  // 生成时间

    this._initAttris(opts);
    this.effects = {};  // 卡牌附加效果
    this.powerUpPercent = 0;
};

module.exports = CardEntity;
let pro = CardEntity.prototype;

pro._initAttris = function (attris) {
    if (!attris)
        return;
    for (let key in attris) {
        this[key] = attris[key];
    }
};

pro.getClientInfo = function () {
    return {
        cid: this.cid,
        lv: this.lv,
        mp: this.mp,
        powerUpPercent: this.powerUpPercent,
    }
};

// 克隆一个新对象
pro.clone = function (inherit) {
    let ent = new CardEntity(this.cid);
    if (inherit) {
        ent.lv = this.lv;
        ent.mp = this.mp;
        ent.effects = JSON.parse(JSON.stringify(this.effects));
        ent.updateEffects();
    }
    return ent;
};

// 增加效果
pro.addEffect = function (effectName, val, effectTimes) {
    if (!this.effects.hasOwnProperty(effectName)) {
        this.effects[effectName] = [];
    }
    this.effects[effectName].push({
        val: val,
        times: effectTimes,
    })
    this._updateEffectByType(effectName);
};

pro._updateEffectByType = function (effectName) {
    if (effectName === consts.CardEffect.reduceMP) {
        this._updateReduceMPEffect();
    }
    else if (effectName === consts.CardEffect.powerUp) {
        this._updatePowerUpEffect();
    }
};

// 威力增加效果
pro._updatePowerUpEffect = function () {
    this.powerUpPercent = 0;
    for (let data of this.effects[consts.CardEffect.powerUp]) {
        this.powerUpPercent += data.val;
    }
};

// 费用更新
pro._updateReduceMPEffect = function () {
    let mp = this.config.CastMP;
    for (let data of this.effects[consts.CardEffect.reduceMP]) {
        if (data.val === 'all') {
            mp = 0;
        }
        else {
            mp = Math.max(0, mp - data.val)
        }
        if (mp <= 0)
            break;
    }
    this.mp = mp;
};

// 效果更新
pro.updateEffects = function () {
    for (let effectName in this.effects) {
        this._updateEffectByType(effectName);
    }
};

pro._doEffect = function (entity) {
    if (this.powerUpPercent) {
        entity.prop.modProp('powerUp', this.powerUpPercent);
    }
};

pro._endEffect = function (entity) {
    if (this.powerUpPercent) {
        entity.prop.modProp('powerUp', -this.powerUpPercent);
    }
};

// 使用
pro.onUse = function (entity) {
    if (utils.isEmptyObject(this.effects))
        return;
    this._doEffect(entity);
};

pro.onUseFinish = function (entity) {
    if (utils.isEmptyObject(this.effects))
        return;
    this._endEffect(entity);
    // 生效次数全部减1
    for (let effectName of Object.getOwnPropertyNames(this.effects)) {
        let effectList = this.effects[effectName];
        for (let i = effectList.length - 1; i >= 0; i--) {
            if (effectList[i].times <= 1) {
                effectList.splice(i, 1);
            }
            else {
                effectList[i].times--;
            }
        }
        this._updateEffectByType(effectName);
        if (effectList.length === 0)
            delete this.effects[effectName];
    }
};
