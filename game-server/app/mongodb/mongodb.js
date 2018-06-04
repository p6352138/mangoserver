var assert = require('assert');
var mongoose = require('mongoose');
var schemaConfig = require('./schemaConfig')


var uri = null;

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + uri);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = function (app) {
    return new Mongodb(app);
}

var Mongodb = function(app) {
    this.app = app;
};

// 初始化连接
Mongodb.prototype.init = function () {
    var app = this.app;
    var mongodbConfig = app.get('mongodb');
    var host = mongodbConfig.host, port = mongodbConfig.port;
    uri = "mongodb://" + host + ":" + port + "/mango";
    mongoose.connect(uri,  mongodbConfig.options);
    // 初始化model
    this.initModel();
}

Mongodb.prototype.initModel = function () {
    var models = {};
    for (var name in schemaConfig) {
        models[name] = mongoose.model(name, schemaConfig[name]);
    };
    Mongodb.prototype.models = models;
}

Mongodb.prototype.newModel = function (name, data) {
    assert(name in this.models, "no model: " + name);
    var model = this.models[name];
    return new model(data);
}

Mongodb.prototype.getModel = function (name) {
    assert(name in this.models, "no model: " + name);
    return this.models[name];
}

Mongodb.prototype.find = function (modelName, conditions, projection=null, options=null, callback=null) {
    
}
