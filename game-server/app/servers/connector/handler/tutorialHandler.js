/**
 * Date: 2018/11/19
 * Author: liuhaibo
 * Description: 新手引导
 */
module.exports = function(app) {
    return new Handler(app);
};

let Handler = function(app) {
    this.app = app;
};

let handler = Handler.prototype;

handler.tutorialSave = function (msg, session, next) {
    session.avatar.tutorial.save(msg, next);
};
/*handler.tutorialGet = function (msg, session, next) {
    session.avatar.tutorial.get(next);
};*/

handler.tutorialEnterDungeon = function (msg, session, next) {
    session.avatar.tutorial.enterDungeon(msg.dgId, next);
};
