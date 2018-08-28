/**
 * Date: 2018/7/25
 * Author: liuguolai
 * Description:
 */
var Component = _require('../component');
var util = _require('util');
var consts = _require('../../common/consts');
var pomelo = _require('pomelo');

var DungeonCtrl = function (entity) {
    Component.call(this, entity);
};

util.inherits(DungeonCtrl, Component);
module.exports = DungeonCtrl;

var pro = DungeonCtrl.prototype;

pro.init = function (opts) {
    this.dgEntId = 0;
    this.fightServer = null;
    this.inDungeon = false;
};

// 设置副本信息
pro.setDungeonInfo = function (fightServer, dgEntId) {
    this.dgEntId = dgEntId;
    this.fightServer = fightServer;
    this.inDungeon = true;
};

// 顶号或重连后获取当前副本信息
pro.relayCheckDungeonInfo = function () {
    var self = this;
    if (!self.inDungeon)
        return;
    pomelo.app.rpc.fight.fightRemote.getDungeonInfo.toServer(self.fightServer, self.dgEntId, function (code, dgInfo) {
        if (code === consts.DungeonStatus.END) {
            self.inDungeon = false;
            self.entity.logger.error("dungeon end without notify? ");
            return;
        }
        self.entity.sendMessage('onDungeonReconnect', dgInfo);
    });
};

// 副本结束
pro.fightEnd = function (fightResult) {
    this.inDungeon = false;
    this.entity.sendMessage('onFightEnd', {
        result: fightResult
    });
};

// 加载超时
pro.loadTimeout = function (names) {
    this.inDungeon = false;
    this.entity.sendMessage('onLoadTimeout', {
        names: names
    });
};
