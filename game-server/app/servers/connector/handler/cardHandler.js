/**
 * Date: 2018/11/20
 * Author: liuhaibo
 * Description: 卡牌相关接口
 */
module.exports = function(app) {
    return new Handler(app);
};

let Handler = function(app) {
    this.app = app;
};

let handler = Handler.prototype;

handler.cardUpgrade = function (msg, session, next) {
    session.avatar.card.upgrade(msg, next);
};



