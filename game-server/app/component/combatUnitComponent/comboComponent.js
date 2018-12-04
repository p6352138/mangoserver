/**
 * Date: 2018/11/28
 * Author: liuguolai
 * Description: 战斗combo管理
 */
let Component = _require('../component');
let util = require('util');

let ComboComponent = function (entity) {
    Component.call(this, entity);
}

util.inherits(ComboComponent, Component);
module.exports = ComboComponent;

let pro = ComboComponent.prototype;

pro.init = function (opts) {
    this._comboTimer = null;
};

pro.addCombo = function (num=1) {
    this.entity.prop.modProp('combo', num, true);
    this.emit('EventComboChanged', this.entity);
    this._notifyCombo();
    this._updateComboTimer();
};

pro.resetCombo = function () {
    this.entity.prop.modProp('combo', -this.entity.combo, true);
    this.emit('EventComboChanged', this.entity);
    this._notifyCombo();
    this._clearComboTimer();
};

pro._notifyCombo = function () {
    this.entity.updateFightData('onComboUpdate', {
        num: this.entity.combo
    });
};

pro._clearComboTimer = function () {
    if (this._comboTimer) {
        clearTimeout(this._comboTimer);
        this._comboTimer = null;
    }
};

pro._updateComboTimer = function () {
    this._clearComboTimer();
    this._comboTimer = setTimeout(this.resetCombo.bind(this), 5000);
};

pro.destroy = function () {
    this._clearComboTimer();
    Component.prototype.destroy.call(this);
};
