/**
 * Date: 2018/7/6
 * Author: liuguolai
 * Description:
 */
var Component = _require('../component');
var util = _require('util');
var skillTpl = _require('../../data/Skill');
var consts = _require('../../public/consts');
var Skill = _require('../../entity/skill');
let skillHelper = _require('../../helper/skillHelper');

var SkillCtrl = function (entity) {
    Component.call(this, entity);
};

util.inherits(SkillCtrl, Component);
module.exports = SkillCtrl;

var pro = SkillCtrl.prototype;

pro.init = function (opts) {
    this.inPrepare = false;  // 吟唱和抬手准备
    this.curPrepareSkill = null;
    this.skills = {};
    this.tauntTargetID = "";  // 嘲讽目标ID

    this.entity.state.safeBindEvent("EventBreakOperation", this._onBreakOperation.bind(this));
};

pro._onBreakOperation = function (entity, op) {
    // 打断所有技能
    for (let skillUid in this.skills) {
        this.skills[skillUid].destroy();
    }
    this.skills = {};
};

pro.setTauntTargetID = function (targetID) {
    this.tauntTargetID = targetID;
    this.entity.updateFightData("onTauntUpdate", {
        targetID: targetID
    });
};

pro.setPrepareSkill = function (skill) {
    if (!skill) {
        this.inPrepare = false;
        this.curPrepareSkill = null;
    }
    else {
        this.inPrepare = true;
        this.curPrepareSkill = skill;
    }
};

// 目标检测
pro._checkTarget = function (targetConfig, targetID) {
    if (targetConfig.type === consts.Skill.TYPE_SINGLE) {
        // 被嘲讽了
        if (this.tauntTargetID && this.tauntTargetID !== targetID)
            return false;
        var target = this.entity.owner.getMember(targetID);
        if (!target)
            return false;
        if (targetConfig.dead && !target.state.isDead())
            return false;
        if (!targetConfig.dead && target.state.isDead())
            return false;
        var isFriend = this.entity.groupId == target.groupId;
        var team = targetConfig.team;
        if (isFriend && team === consts.Skill.TEAM_ENEMY || !isFriend && team === consts.Skill.TEAM_FRIEND)
            return false;
    }
    return true;
};

pro._checkSkillAction = function (action, usedCardIdx, exCards) {
    for (let actionName in action) {
        if (actionName === 'dropCard') {  // 弃牌检测
            let data = action[actionName];
            let num = data.num, cardType = data.cardType,
                cardQuality = data.cardQuality, cardAttributes = data.cardAttributes;
            let validCards = this.entity.cardCtrl.getValidCardsFromPile(
                cardType, cardQuality, cardAttributes, consts.PileType.IN_HANDS, function (idx) {
                    return idx != usedCardIdx;
                });
            num = Math.min(num, validCards.length);
            if (num > 0 && (!exCards || exCards.length !== num))
                return false;
            if (num > 0) {
                for (let exCardInfo of exCards) {
                    let found = false;
                    for (let cardInfo of validCards) {
                        if (cardInfo.idx === exCardInfo.idx) {
                            found = true;
                            break;
                        }
                    }
                    if (!found)  // 不符合需求
                        return false;
                }
            }
        }
    }
    return true;
};

// 技能可用性检测
pro.canUseSkill = function (skillID, lv, targetID, usedCardIdx, exCards) {
    if (this.inPrepare)
        return consts.FightCode.SKILL_IN_PREPARE;
    var skillData = skillTpl[skillID];
    if (!skillData)
        return consts.FightCode.SKILL_NOT_FOUND;
    if (!this._checkTarget(skillData[1].Target, targetID))
        return consts.FightCode.SKILL_TARGET_ERR;
    if (!this._checkSkillAction(skillHelper.getSkillAction(skillID, 1, lv), usedCardIdx, exCards))
        return consts.FightCode.SKILL_PARAM_ERR;

    return consts.FightCode.OK;
};

// 使用技能
pro.useSkill = function (skillID, skillLv, targetID, exData ) {
    var skill = new Skill(this, skillID, skillLv, targetID, exData );
    this.skills[skill.id] = skill;
    skill.entry();
};

pro.removeSkill = function (skillUid) {
    var skill = this.skills[skillUid];
    if (!skill)
        return;
    skill.destroy();
    delete this.skills[skillUid];
};

pro.destroy = function () {
    for (var skillUid in this.skills) {
        this.skills[skillUid].destroy();
    }
    this.skills = null;
    this.setPrepareSkill(null);
    Component.prototype.destroy.call(this);
};
