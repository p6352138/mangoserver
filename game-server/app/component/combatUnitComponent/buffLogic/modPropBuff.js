/**
 * Date: 2018/7/19
 * Author: liuguolai
 * Description: 易伤buff
 */
var BuffLogic = _require('./buffLogic');
var util = _require('util');

var ModPropBuff = function (buff, cell, logicid) {
    BuffLogic.call(this, buff, cell, logicid);
    this._propMod = {};  // 修改过的属性
};

util.inherits(ModPropBuff, BuffLogic);
module.exports = ModPropBuff;

var pro = ModPropBuff.prototype;

pro._onEnter = function () {
    var logicData = this.dataLogic;
    for (var propName in logicData) {
        if (propName === 'rate')
            continue;
        if (!this.entity.hasOwnProperty(propName))
            throw new Error(this.entity.id + " mod porp without porp: " + propName);
        let value = logicData[propName];
        if (value === 'combo') {
            value = Math.floor(this.entity.combo * logicData['rate']);
        }
        this._propMod[propName] = value;
        this.entity.prop.modProp(propName, value);
    }
};

pro._onExit = function () {
    var logicData = this.dataLogic;
    for (var propName in logicData) {
        if (propName === 'rate')
            continue;
        if (this.entity.hasOwnProperty(propName))
            this.entity.prop.modProp(propName, -this._propMod[propName]);
    }
    delete this._propMod;
};
