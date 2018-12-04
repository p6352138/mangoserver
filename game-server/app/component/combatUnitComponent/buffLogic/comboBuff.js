/**
 * Date: 2018/11/29
 * Author: liuguolai
 * Description: 概率增加连击数
 */
let BuffLogic = _require('./buffLogic');
let util = require('util');

let ComboBuff = function (buff, cell, logicid) {
    BuffLogic.call(this, buff, cell, logicid);
};

util.inherits(ComboBuff, BuffLogic);
module.exports = ComboBuff;

let pro = ComboBuff.prototype;

pro._onComboChanged = function (entity) {
    if (entity.combo > 0) {
        if (Math.random() < this.rate) {
            entity.prop.modProp('combo', this.extraCombo, true);
        }
    }
};

pro._onEnter = function () {
    let logicData = this.dataLogic;
    this.extraCombo = logicData.addCombo;
    this.rate = logicData.rate;

    this._func = this._onComboChanged.bind(this);
    this.entity.comboComponent.on('EventComboChanged', this._func);
};

pro._onExit = function () {
    this.entity.comboComponent.removeListener("EventComboChanged", this._func);
};
