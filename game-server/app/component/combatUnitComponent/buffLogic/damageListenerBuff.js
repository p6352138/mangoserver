/**
 * Date: 2018/7/19
 * Author: liuguolai
 * Description: 伤害监听buff
 */
var BuffLogic = _require('./buffLogic');
var util = _require('util');

var DamageListenerBuff = function (buff, cell, logicid) {
    BuffLogic.call(this, buff, cell, logicid);
};

util.inherits(DamageListenerBuff, BuffLogic);
module.exports = DamageListenerBuff;

var pro = DamageListenerBuff.prototype;

pro._onSubHp = function (entity, oldVal, newVal) {
    if (oldVal - newVal >= this.needDmg) {
        if (this.data.SkillID) {
            entity.skillCtrl.useSkill(this.data.SkillID, this.cell.level);
        }
        if (this.count > 0) {
            this.count --;
            if (this.count === 0) {
                this.suicide(null, this.cell.id);
            }
        }
    }
};

pro._onEnter = function () {
    var logicData = this.data.Logic;
    this.count = logicData.count || -1;  // 生效次数
    this.needDmg = logicData.dmg;

    this._func = this._onSubHp.bind(this);
    this.entity.prop.on("EventSubHp", this._func);
};

pro._onExit = function () {
    this.entity.prop.removeListener("EventSubHp", this._func);
};
