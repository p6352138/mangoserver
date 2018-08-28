/**
 * Date: 2018/6/19
 * Author: liuguolai
 * Description: 路由控制
 */

var exp = module.exports

exp.fight = function (session, msg, app, cb) {
    var serverId = session.get('fightServer');

    if(!serverId) {
        cb(new Error('can not find server info for type: ' + msg.serverType));
        return;
    }

    cb(null, serverId);
}
