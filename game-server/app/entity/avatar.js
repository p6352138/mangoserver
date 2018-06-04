/**
 * Date: 2018/6/2
 * Author: liuguolai
 * Description: 主角
 */
var pomelo = require('pomelo');
var util = require('util');
var logger = require('pomelo-logger').getLogger(__filename);
var Entity = require('./entity');
var mongodb = require("../mongodb/mongodb");

var AUTO_SAVE_TICK = 1000 * 60 * 5  // 自动存盘时间

var Avatar = function (opts) {
    Entity.call(this, opts);
    this.initDBModel();  // 初始化存盘的Model
    setInterval(function () {
        this.save();
    }.bind(this), AUTO_SAVE_TICK);  // 自动存盘
};

util.inherits(Avatar, Entity);
module.exports = Avatar;

Avatar.prototype.initDBModel = function () {
    var dbModel = pomelo.app.db.newModel("Avatar", require('../mongodb/schemas/avatarSchema'));
    this.db = new dbModel({
        _id: this.id,
        name: this.name,
    });
};

Avatar.prototype.save = function () {
    this.db.save(function (err, product) {
        if (err){
            console.log(this.id + " save db error: " + err);
            return;
        }
        console.log("save db success: " + product);
    });
};
