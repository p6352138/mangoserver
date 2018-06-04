var fightRemote = require('../remote/fightRemote');
var fightManger = require('../../../services/fightManger');

module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
	this.channelService = app.get('channelService');
};

var handler = Handler.prototype;

/**
 * 进入战斗场景开始战斗 
 * @param {Object} msg uid 当前玩家uid  
 * @param {*} session 
 * @param {*} next 
 */
handler.beginFight = function(msg,session,next){
	var self = this;
	var uuid = msg.uid;

	/// 战斗卡组初始化
	fightManger.init();

	//var channel = this.channelService.getChannel(10001, true);
	//channel.add(uuid,self.app.get('serverId'));

	fightManger.beginFight(uuid,10001);

	next(null,{roomid:10001});
}

/**
 * Send messages to users
 *
 * @param {Object} msg message from client
 * @param {Object} session
 * @param  {Function} next next stemp callback
 *
 */
handler.send = function(msg, session, next) {
	var rid = session.get('rid');
	var username = session.uid.split('*')[0];
	//var channelService = this.app.get('channelService');
	var param = {
		msg: msg.content,
		from: username,
		target: msg.target
	};
	/*
	channel = channelService.getChannel(rid, false);

	//the target is all users
	if(msg.target == '*') {
		channel.pushMessage('onChat', param);
	}
	//the target is specific user
	else {
		var tuid = msg.target + '*' + rid;
		var tsid = channel.getMember(tuid)['sid'];
		channelService.pushMessageByUids('onChat', param, [{
			uid: tuid,
			sid: tsid
		}]);
	}
	*/
	next(null, {
		route: msg.route
	});
};