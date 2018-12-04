/**
 * Date: 2018/11/19
 * Author: liuhaibo
 * Description:  新手引导组件
 */
let pomelo = require('pomelo');
let util = require('util');
let Component = _require('../component');
let consts = _require('../../public/consts');
//let utils = require('../../util/utils');
let constTpl = _require('../../data/Constant');
let fightHelper = _require('../../helper/fightHelper');

let TutorialComponent = function (entity) {
    Component.call(this, entity);
};

util.inherits(TutorialComponent, Component);
module.exports = TutorialComponent;

let pro = TutorialComponent.prototype;

pro.init = function (opts) {
    this._initDbData(opts.tutorial || {});
};

pro._initDbData = function (data) {
    // this.tutorialInf = data || {raid:0,room:0};

    this.finishedDgIds = data.finishedDgIds || [];  // 完成的副本id
};
pro.save = function(data,next){
    this.tutorialInf = {raid:(data.raid || 0),room:(data.room || 0 ) } ;
    next(null, {code: consts.Code.OK});
};
/*
pro.get = function(next){
    next(null, {code: consts.Code.OK,data:this.tutorialInf});
}*/
pro.getPersistData = function () {
    // return  this.tutorialInf ;
    return {
        finishedDgIds: this.finishedDgIds,
    }
};
pro.getClientInfo = function () {
    // return  this.tutorialInf ;
    return {
        finishedDgIds: this.finishedDgIds,
    }
};
pro.destroy = function () {
    Component.prototype.destroy.call(this);
};

pro._checkCanEnterDungeon = function (dgId) {
    if (this.entity.isBusy()) {
        return false;
    }
    if (constTpl.TutorialDungeon.indexOf(dgId) === -1)
        return false;
    if (this.finishedDgIds.indexOf(dgId) !== -1)
        return false;
    return true;
};

pro.enterDungeon = function (dgId, next) {
    if (!this._checkCanEnterDungeon(dgId))
        return next(null, {code: consts.Code.FAIL});
    let ent = this.entity, server = fightHelper.getSinglePVEServer(ent);
    pomelo.app.rpc.fight.fightRemote.newFight.toServer(server,
        consts.Team.TYPE_TUTORIAL, dgId, {
            [ent.id]: {
                openid: ent.openid,
                sid: pomelo.app.getServerId(),
                name: ent.name,
                level: ent.level,
                inTeam: 0,
                heroid: 1000  // TODO：写死1000楚留香，待定
            }
        }, {}, {}, null);
    next(null, {code: consts.Code.OK});
};

pro.onDungeonEnd = function (result, dgId) {
    if (result === consts.FightResult.WIN) {
        this.finishedDgIds.push(dgId);
    }
    this.entity.logger.info('tutorial dungeon[%s] fight result:%s', dgId, result);
};
