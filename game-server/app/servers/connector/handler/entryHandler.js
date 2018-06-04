module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
		this.app = app;
};

var handler = Handler.prototype;

/**
 * New client entry chat server.
 *
 * @param  {Object}   msg     request message
 * @param  {Object}   session current session object
 * @param  {Function} next    next stemp callback
 * @return {Void}
 */
handler.enter = function(msg, session, next) {
	var self = this;
	//var rid = msg.rid;
	var uid = msg.uid;
	var sessionService = self.app.get('sessionService');

	//duplicate log in
	if( !! sessionService.getByUid(uid)) {
		next(null, {
			code: 500,
			error: true
		});
		return;
	}
	//console.log("uid === ",uid);

	var Avatar = require('../../../entity/avatar');
	var avatar = new Avatar({name: "test"});
	console.log(avatar.id);
	console.log((avatar.name));
	console.log("xxxxxxxxxxxxxxxxxxxxxxx");

	session.bind(uid);
	session.set('rid', uid);
	session.push('rid', function(err) {
		if(err) {
			console.error('set rid for session service failed! error is : %j', err.stack);
		}
	});
	session.on('closed', onUserLeave.bind(null, self.app));

	//put user into fight
	self.app.rpc.fight.fightRemote.add(session, uid, self.app.get('serverId'), 10000, true, function(users){
		next(null, {
			users:users
		});
	});
	
};

/**
 * User log out handler
 *
 * @param {Object} app current application
 * @param {Object} session current session object
 *
 */
var onUserLeave = function(app, session) {
	if(!session || !session.uid) {
		return;
	}
	app.rpc.fight.fightRemote.kick(session,session.uid, this.app.get('serverId'), 10000);
};