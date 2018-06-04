/**
 * Date: 2018/6/2
 * Author: liuguolai
 * Description: entity基类
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var ObjectId = require('mongoose').Types.ObjectId;

var Entity = function (opts) {
    opts = opts || {};
    EventEmitter.call(this);
    this.id = opts.id ? opts.id: ObjectId();
    this.name = opts.name ? opts.name:"default";
};

util.inherits(Entity, EventEmitter);
module.exports = Entity;


