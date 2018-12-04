/**
 * Date: 2018/9/10
 * Author: liuguolai
 * Description: 嘲讽buff
 */
var BuffLogic = _require('./buffLogic');
var util = require('util');

var TauntBuff = function (buff, cell, logicid) {
    BuffLogic.call(this, buff, cell, logicid);
};

util.inherits(TauntBuff, BuffLogic);
module.exports = TauntBuff;

var pro = TauntBuff.prototype;

pro._onEnter = function () {
    this._tauntTargetID = this.cell.casterID;
    this.entity.skillCtrl.setTauntTargetID(this._tauntTargetID);
    // 通过仇恨强制目标
    this._addHatred = this.entity.hatred.getMaxHatredValue() + 100000;  // 跟王总确认过
    this.entity.hatred.add(this._tauntTargetID, this._addHatred);
};

pro._onExit = function () {
    this.entity.skillCtrl.setTauntTargetID("");
    this.entity.hatred.add(this._tauntTargetID, -this._addHatred);
};

pro.refresh = function () {
    this._onExit();
    this._onEnter();
};
