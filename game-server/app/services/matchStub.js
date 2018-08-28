/**
 * Date: 2018/6/19
 * Author: liuguolai
 * Description: 负责匹配
 */
var pomelo = require('pomelo');
var consts = _require('../public/consts');

var MatchStub = function (opts) {
    opts = opts || {};
    this.matchType = opts.matchType;
    if (this.matchType === consts.MatchType.PVP) {
        this.pvp = true;
    }
    else if (this.matchType === consts.MatchType.PVE_2) {
        this.matchNum = 2;  // pve战斗匹配人数
        this.pvp = false;
    }
    else if (this.matchType === consts.MatchType.PVE_3) {
        this.matchNum = 3;
        this.pvp = false;
    }
    this.queue = {};
    this.info = {};

    this.fightServerIds = pomelo.app.get("fightIdsMap")[this.matchType];
    this.serverNum = this.fightServerIds.length;
    this.curServerIdx = 0;

    this.checkTimer = {};
};

module.exports = MatchStub;
var pro = MatchStub.prototype;

// 匹配开启战斗
pro.checkMatchPVE = function (dgId) {
    this.checkTimer[dgId] = null;
    var queue = this.queue[dgId], len = queue.length, info = this.info;
    if (len < this.matchNum)
        return;
    var battleInfo = {};
    var num = 0, checkNum = 0;
    for (var i = 0; i < len; i++) {
        checkNum++;
        var uid = queue[i];
        if (uid in info) {
            battleInfo[uid] = info[uid];
            num++;
        }
        if (num >= this.matchNum) {
            // 清队列数据
            queue.splice(0, checkNum);
            for (var _uid in battleInfo) {
                delete info[_uid];
            }
            this.notifyNewFight(dgId, battleInfo);
            this.checkMatchPVE(dgId);
            return;
        }
    }
};

pro.notifyNewFight = function (dgId, teamA, teamB) {
    var teamB = teamB || {};
    // 简单的循环处理，TODO： 更实时的负载均衡
    var server = this.fightServerIds[this.curServerIdx % this.serverNum];
    this.curServerIdx++;
    pomelo.app.rpc.fight.fightRemote.newFight.toServer(server, dgId, teamA, teamB, null);
};

// 匹配
pro.match = function (uid, sid, dgId, avtName) {
    if (uid in this.info)
        return consts.MatchCode.IN_QUEUE;
    this.info[uid] = {
        sid: sid,
        dgId: dgId,
        name: avtName
    }
    if (!this.queue.hasOwnProperty(dgId)){
        this.queue[dgId] = [];
    }
    this.queue[dgId].push(uid);
    if (!this.checkTimer[dgId]) {
        this.checkTimer[dgId] = setTimeout(() => {
            if (!this.pvp)
                this.checkMatchPVE(dgId);
        }, 500);
    }
    return consts.MatchCode.OK;
};

// 取消匹配
pro.unmatch = function (uid) {
    if (uid in this.info) {
        var dgId = this.info[uid].dgId;
        delete this.info[uid];
        var idx = this.queue[dgId].indexOf(uid);
        if (idx >= 0)
            this.queue[dgId].splice(idx, 1)
    }
};
