var entityFactory = _require('../../../entity/entityFactory');
var entityManager = _require('../../../services/entityManager');
var consts = _require('../../../common/consts');

module.exports = function(app) {
	return new FightRemote(app);
};

var FightRemote = function(app) {
	this.app = app;
	this.channelService = app.get('channelService');
};

var pro = FightRemote.prototype;

// 匹配成功，进入房间
pro.newFight = function (dgId, teamA, teamB, cb) {
    var dungeonEntity = entityFactory.createEntity("DungeonEntity");
    dungeonEntity.initFight(dgId, teamA, teamB);
    cb();
};

// 当前dungeon的信息
pro.getDungeonInfo = function (dgEntId, cb) {
    var dungeonEntity = entityManager.getEntity(dgEntId);
    if (!dungeonEntity) {
        cb(consts.DungeonStatus.END);
        return;
    }
    var dungeonInfo = dungeonEntity.getCurrInfo();
    cb(dungeonInfo.status, dungeonInfo);
};
