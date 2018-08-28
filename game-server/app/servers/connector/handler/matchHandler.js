/**
 * Date: 2018/6/19
 * Author: liuguolai
 * Description: 玩家战斗匹配接口
 */
var entityManager = _require('../../../services/entityManager');
var consts = _require('../../../public/consts');

module.exports = function(app) {
    return new Handler(app);
};

var Handler = function(app) {
    this.app = app;
};

var handler = Handler.prototype;

var getMatchNeedHeroNum = function (matchType) {
    if (matchType == consts.MatchType.PVE_1)
        return 1;
    else if (matchType === consts.MatchType.PVE_2)
        return 2;
    else
        return 3;
};

handler.match = function (msg, session, next) {
    var self = this;
    var matchType = msg.matchType, dgId = msg.dgId || 0;
    if (matchType !== consts.MatchType.PVE_2 && matchType !== consts.MatchType.PVE_3 && matchType !== consts.MatchType.PVP) {
        next(null, {code: consts.Code.FAIL});
        return;
    }
    var avatar = entityManager.getEntity(session.uid);
    if (!avatar || avatar.match.inMatching || avatar.dungeon.inDungeon || avatar.hero.heroNum() < getMatchNeedHeroNum(matchType)) {
        next(null, {code: consts.Code.FAIL});
        return;
    }
    avatar.match.setMatchStatus(true, matchType, dgId);
    self.app.rpc.match.matchRemote.match(
        null, matchType, avatar.id, self.app.get('serverId'), dgId, avatar.name, function (res) {
            if (res !== consts.MatchCode.OK) {
                avatar.match.setMatchStatus(false);
            }
            next(null, {code: res});
            return;
        })
};

handler.unmatch = function (msg, session, next) {
    var avatar = entityManager.getEntity(session.uid);
    if (!avatar || !avatar.match.inMatching) {
        next(null, {});
        return;
    }
    avatar.match.unmatch(function () {
        avatar.match.setMatchStatus(false);
        next(null, {});
    });
};
