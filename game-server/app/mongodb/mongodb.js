var mongoose = require('mongoose')
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
}

Mongodb.prototype.newModel = function (name, schema) {
    return mongoose.model(name, schema);
}
