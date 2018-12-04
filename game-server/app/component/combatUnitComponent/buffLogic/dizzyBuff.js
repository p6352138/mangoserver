/**
 * Date: 2018/11/17
 * Author: liuguolai
 * Description: 眩晕buff
 */
let BuffLogic = _require('./buffLogic');
let util = require('util');
let consts = _require('../../../common/consts');

let DizzyBuff = function (buff, cell, logicid) {
    BuffLogic.call(this, buff, cell, logicid);
};

util.inherits(DizzyBuff, BuffLogic);
module.exports = DizzyBuff;

let pro = DizzyBuff.prototype;

pro._onEnter = function () {
    this.featureOpt = consts.FeatureOpt.SKILL_FORBIT | consts.FeatureOpt.AI_PAUSE;
    this.entity.state.featureOn(this.featureOpt);
    this.entity.state.breakOperation(consts.BreakOp.ALL);
};

pro._onExit = function () {
    this.entity.state.featureOff(this.featureOpt);
};
