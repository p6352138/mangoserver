/**
 * Date: 2018/6/2
 * Author: liuguolai
 * Description: 主角
 */
var pomelo = _require('pomelo');
var util = _require('util');
var Entity = _require('./entity');
var messageService = _require('../services/messageService');
var consts = _require('../common/consts');

var AUTO_SAVE_TICK = 1000 * 60 * 5  // 自动存盘时间

var Avatar = function (opts) {
    opts = opts || {};
    opts.components = ['match', 'hero', 'dungeon'];  // avatar组件
    Entity.call(this, opts);

    this.logoutTimer = null;
    this.serverId = pomelo.app.get('serverId');
    this.openid = opts.openid ? opts.openid: "";
    this.session_key = opts.session_key ? opts.session_key: "";
    this.uid = 0;
    this.level = opts.level ? opts.level: 0;
    this.name = "unknow";

    this.sessionSetting = {}  // session设置
    
    this.initDBModel();  // 初始化存盘的Model
    this.dbTimer = setInterval(function () {
        this.save();
    }.bind(this), AUTO_SAVE_TICK);  // 自动存盘
};

util.inherits(Avatar, Entity);
module.exports = Avatar;

Avatar.prototype.initDBModel = function () {
    this.db = pomelo.app.db.getModel("Avatar");
};

// 存盘信息更新
Avatar.prototype.getDBProp = function () {
    return {
        _id: this.id,
        openid: this.openid,
        uid: this.uid,
        level: this.level
    }
};

// 存盘
Avatar.prototype.save = function (cb) {
    var self = this;
    var prop = self.getDBProp();
    var options    = {upsert : true};
    self.db.update({_id: self.id}, prop, options, function (err, product) {
        if (err){
            self.logger.info(" save db error: " + err);
            if (cb) {
                cb(false);
            }
            return;
        }
        self.logger.info(" save db success.");
        if (cb) {
            cb(true);
        }
    });
};

// 登录时发给客户端
Avatar.prototype.clientLoginInfo = function () {
    return {
        id: this.id,
        level: this.level,
        matchInfo: this.match.getClientInfo(),
    }
};

// 增加session setting
Avatar.prototype.setSessionSetting = function (key, value) {
    this.sessionSetting[key] = value;
};

Avatar.prototype._getCurSession = function () {
    var sessionService = pomelo.app.get('sessionService');
    var sessions = sessionService.getByUid(this.id);
    if (!sessions || sessions.length === 0) {
        this.logger.error("get current session failed.");
        return null;
    }
    return sessions[0];
};

Avatar.prototype.removeSessionSetting = function (key, bSync) {
    delete this.sessionSetting[key];
    if (bSync) {
        var session = this._getCurSession();
        if (session) {
            // session.remove(key);
            session.set(key, undefined);
        }
    }
};

Avatar.prototype.importSessionSetting = function (cb) {
    var session = this._getCurSession();
    if (session) {
        session.set(this.sessionSetting);
        if (cb)
            cb(consts.Code.OK);
    }
    else {
        if (cb)
            cb(consts.Code.FAIL);
    }
    // var self = this;
    // sessionService.importAll(session.id, this.sessionSetting, function(err) {
    //     if (err) {
    //         self.logger.error('import session setting failed! error is : %j', err.stack);
    //         if (cb)
    //             cb(consts.Code.FAIL);
    //         return;
    //     }
    //     if (cb)
    //         cb(consts.Code.OK);
    // })
};

// 发信息给客户端
Avatar.prototype.sendMessage = function (route, msg) {
    messageService.pushMessageToPlayer({
        uid: this.id,
        sid: this.serverId
    }, route, msg);
};

// 连接断开
Avatar.prototype.disconnect = function () {
    this.logger.info("Avatar disconnect.");
    this.logoutTimer = setTimeout(function () {
        this.destroy();
    }.bind(this), 1000 * 500);  // 离线缓冲
    this.emit("EventDisconnect", this);
};

// 重新连接
Avatar.prototype.reconnect = function () {
    this.logger.info("Avatar reconnect.");
    if (this.logoutTimer) {
        clearTimeout(this.logoutTimer);
        this.logoutTimer = null;
    }
    // 副本信息更新
    this.dungeon.relayCheckDungeonInfo();
};

// 销毁
Avatar.prototype.destroy = function (cb) {
    var self = this;
    self.emit('EventDestory', this);
    pomelo.app.rpc.auth.authRemote.checkout(null, self.openid, self.uid, null);
    // 存盘
    clearInterval(self.dbTimer);
    self.dbTimer = null;
    if (self.logoutTimer) {
        clearTimeout(self.logoutTimer);
        self.logoutTimer = null;
    }

    self.save(function (r) {
        if (cb)
            cb();
        self.logger.info("Avatar Destroyed.");
        Entity.prototype.destroy.call(self);
    });
};
