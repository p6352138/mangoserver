/**
 * Date: 2018/7/7
 * Author: liuguolai
 * Description: 状态管理
 */
var Component = _require('../component');
var util = _require('util');
var consts = _require('../../public/consts');

var CombatUnitState = function (entity) {
    Component.call(this, entity);
};

util.inherits(CombatUnitState, Component);
module.exports = CombatUnitState;

var pro = CombatUnitState.prototype;

pro.init = function (opts) {

};

// 死亡
pro.enterDie = function () {
    this.entity.broadcast('onDie', {
        targetID: this.entity.id
    })
    this.emit("EventDie", this.entity);
};

// 复活
pro.enterRelive = function (toHp, toPercent) {
    if (this.isAlive())
        return false
    if (toHp) {
        this.entity.hp = Math.min(toHp, this.entity.maxHp);
    }
    else if (toPercent) {
        this.entity.hp = Math.floor(this.entity.maxHp * toPercent);
    }
    else {
        throw new Error(this.entity.id + " relive failed.");
    }
    if (this.entity.hp <= 0)
        this.entity.hp = 1;

    this.emit("EventRelive", this.entity);
    return true;
};

pro.isAlive = function () {
    return this.entity.hp > 0;
};

pro.isDead = function () {
    return this.entity.hp <= 0;
};

pro._featureChanged = function () {
    this.entity.updateFightData('onFeatureUpdate', {
        feature: this.entity.feature
    })
};

// 功能点开关
pro.featureOn = function (opts) {
    let oldFeature = this.entity.feature;
    this.entity.feature |= opts;
    if (oldFeature !== this.entity.feature) {
        this._featureChanged();
    }
};

pro.featureOff = function (opts) {
    let oldFeature = this.entity.feature, newOpts, fIdx;
    while (true) {
        newOpts = opts & (opts - 1);
        fIdx = newOpts ^ opts;
        this.entity.feature &= (~fIdx);
        opts = newOpts;
        if (!opts)
            break;
    }
    if (oldFeature !== this.entity.feature) {
        this._featureChanged();
    }
};

pro.breakOperation = function (op, instant=false) {
    if (instant) {
        this.emit("EventBreakOperation", this.entity, op);
    }
    else {  // 默认不马上break
        setTimeout(() => {
            this.emit("EventBreakOperation", this.entity, op);
        }, 0);
    }
};
