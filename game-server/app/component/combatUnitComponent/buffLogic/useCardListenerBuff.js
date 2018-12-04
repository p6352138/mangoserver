/**
 * Date: 2018/7/12
 * Author: liuguolai
 * Description: 使用卡牌监听buff
 */
var BuffLogic = _require('./buffLogic');
var util = require('util');

var UseCardListenerBuff = function (buff, cell, logicid) {
    BuffLogic.call(this, buff, cell, logicid);
};

util.inherits(UseCardListenerBuff, BuffLogic);
module.exports = UseCardListenerBuff;

var pro = UseCardListenerBuff.prototype;

pro._onUseCard = function (entity, card) {
    var cardData = card.config;
    if (this.cardType && this.cardType !== cardData.CardType)
        return;
    if (this.cardQuality && this.cardQuality !== cardData.CardQuality)
        return;
    if (this.cardAttributes && cardData.CardAttributes.indexOf(this.cardAttributes) === -1)
        return;
    this.num --;
    if (this.num === 0) {
        if (this.data.SkillID) {
            this.entity.skillCtrl.useSkill(this.data.SkillID, this.cell.level);
        }
        this.num = this.dataLogic.num;
        if (this.count > 0) {
            this.count --;
            if (this.count === 0) {
                this.suicide(null, this.cell.id);
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

    this._func = this._onUseCard.bind(this);
    this.entity.cardCtrl.on("EventUseCard", this._func);
};

pro._onExit = function () {
    this.entity.cardCtrl.removeListener("EventUseCard", this._func);
};
