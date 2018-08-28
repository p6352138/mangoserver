/**
 * Date: 2018/6/19
 * Author: liuguolai
 * Description:
 */
var utils = _require('../../../util/utils')

module.exports = function(app) {
    return new Remote(app);
};

var Remote = function(app) {
    this.app = app;
};

var pro = Remote.prototype;

pro.match = function (matchType, uid, sid, dgId, avtName, cb) {
    var matchStub = this.app.matchStubs[matchType];
    var res = matchStub.match(uid, sid, dgId, avtName);
    utils.invokeCallback(cb, res);
};

pro.unmatch = function (matchType, uid, cb) {
    var matchStub = this.app.matchStubs[matchType];
    matchStub.unmatch(uid);
    cb();
};
