/**
 * Date: 2018/6/12
 * Author: liuguolai
 * Description:
 */
var entityManager = _require('../../../services/entityManager');
var logger = _require('pomelo-logger').getLogger('game', __filename);
var consts = _require('../../../public/consts');

module.exports = function(app) {
    return new Remote(app);
};

var Remote = function(app) {
    this.app = app;
    this.sessionService = app.get('sessionService');
};

var pro = Remote.prototype;

// 被顶号（废弃，暂时保留）
pro.onRelayReady = function (avtID, cb) {
    var avatar = entityManager.getEntity(avtID);
    if (!avatar) {
        logger.error('be relay with no avt[%s]', avtID);
        cb();
        return;
    }
    this.app.get('sessionService').kick(avtID, "relay");
    avatar.destroy(function () {
        cb();
        logger.info("%s be relay.", avtID);
    });
};

// 匹配完成，进入选英雄
pro.onMatchReady = function (avtID, sid, dgEntId, teamInfo, cb) {
    var avatar = entityManager.getEntity(avtID);
    avatar.setSessionSetting("fightServer", sid);
    avatar.setSessionSetting("dgEntId", dgEntId);
    avatar.importSessionSetting(function (code) {
        if (code === consts.Code.OK) {
            avatar.match.setMatchStatus(false);
            avatar.dungeon.setDungeonInfo(sid, dgEntId);
            avatar.sendMessage("onBeginSelect", {
                teamInfo: teamInfo
            });
            cb(consts.Code.OK, {
                heros: avatar.hero.getOwnHerosInfo()
            });
        }
        else {
            cb(consts.Code.FAIL);
        }
    });
};

// 副本结束
pro.onDungeonFinish = function (avtID, fightResult, cb) {
    var avatar = entityManager.getEntity(avtID);
    avatar.dungeon.fightEnd(fightResult);
    avatar.removeSessionSetting("fightServer", true);
    cb();
};

// 加载超时，副本结束
pro.onLoadTimeout = function (avtID, names, cb) {
    var avatar = entityManager.getEntity(avtID);
    avatar.dungeon.loadTimeout(names);
    avatar.removeSessionSetting("fightServer", true);
    cb();
};
