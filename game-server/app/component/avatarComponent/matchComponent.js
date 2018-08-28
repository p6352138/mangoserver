/**
 * Date: 2018/6/19
 * Author: liuguolai
 * Description: 匹配组件
 */
var pomelo = _require('pomelo');
var Component = _require('../component');
var util = _require('util');
var consts = _require('../../public/consts');

var MatchComponent = function (entity) {
    Component.call(this, entity);
};

util.inherits(MatchComponent, Component);
module.exports = MatchComponent;

var pro = MatchComponent.prototype;

pro.init = function (opts) {
    this.inMatching = false;
    this.matchType = consts.MatchType.PVE_2;
    this.dgId = 0;

    this.entity.on("EventDisconnect", this._onDisconenct.bind(this));
};

pro._onDisconenct = function (entity) {
    if (this.inMatching) {
        this.unmatch(function () {
            this.setMatchStatus(false);
        }.bind(this));
    }
};

pro.getClientInfo = function () {
    return {
        inMatching: this.inMatching,
        matchType: this.matchType,
        dgId: this.dgId,
    }
};

pro.setMatchStatus = function (inMatching, matchType, dgId) {
    this.inMatching = inMatching;
    if (inMatching) {
        this.matchType = matchType;
        this.dgId = dgId;
    }
};

pro.unmatch = function(cb) {
    pomelo.app.rpc.match.matchRemote.unmatch(null, this.matchType, this.entity.id, cb);
};

pro.destroy = function () {
    if (this.inMatching) {
        this.unmatch(null);
    }
    Component.prototype.destroy.call(this);
};
