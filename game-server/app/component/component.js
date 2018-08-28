/**
 * Date: 2018/6/19
 * Author: liuguolai
 * Description: component基类定义
 */
var EventEmitter = _require('events').EventEmitter;
var util = _require('util');

var Component = function (entity) {
    EventEmitter.call(this);
    this.entity = entity
};

util.inherits(Component, EventEmitter);
module.exports = Component;

Component.prototype.destroy = function () {
    this.entity = null;
};
