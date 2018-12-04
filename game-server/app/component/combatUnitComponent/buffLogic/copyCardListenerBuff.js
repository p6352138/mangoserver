/**
 * Date: 2018/11/17
 * Author: liuguolai
 * Description: 复制卡牌监听buff，监听全队所有人，效果作用在被复制者身上
 */
let BuffLogic = _require('./buffLogic');
let util = require('util');

let CopyCardListenerBuff = function (buff, cell, logicid) {
    BuffLogic.call(this, buff, cell, logicid);
};

util.inherits(CopyCardListenerBuff, BuffLogic);
module.exports = CopyCardListenerBuff;

let pro = CopyCardListenerBuff.prototype;

pro._onCopyCard = function (entity, target, cards) {
    for (let card of cards) {
        let cardData = card.config;
        if (this.cardType && this.cardType !== cardData.CardType)
            continue;
        if (this.cardQuality && this.cardQuality !== cardData.CardQuality)
            continue;
        if (this.cardAttributes && cardData.CardAttributes.indexOf(this.cardAttributes) === -1)
            continue;
        this.num--;
        if (this.num === 0) {
            // 对被偷目标使用
            if (this.data.SkillID) {
                this.entity.skillCtrl.useSkill(this.data.SkillID, this.cell.level, target.id);
            }
            this.num = this.dataLogic.num;
            if (this.count > 0) {
                this.count--;
                if (this.count === 0) {
                    this.suicide(null, this.cell.id);
                    return;
                }
            }
        }
    }
};

pro._onEnter = function () {
    var logicData = this.dataLogic;
    this.count = logicData.count || -1;  // 生效次数
    this.num = logicData.num;
    this.cardType = logicData.cardType;
    this.cardQuality = logicData.cardQuality;
    this.cardAttributes = logicData.cardAttributes;

    this._func = this._onCopyCard.bind(this);
    let ents = this.entity.getAllFriends();
    this.ents = ents;
    for (let ent of ents) {
        ent.cardCtrl.on("EventCopyCard", this._func);
    }
};

pro._onExit = function () {
    for (let ent of this.ents) {
        ent.cardCtrl.removeListener("EventCopyCard", this._func);
    }
    this.ents = null;
};