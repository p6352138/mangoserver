/**
 * Date: 2018/11/15
 * Author: liuguolai
 * Description: 复制卡牌
 */
let copy = {};

copy.entry = function (caster, skill, data, targets) {
    if (targets.length === 0)
        return;
    let num = data.num, cardType = data.cardType, cardQuality = data.cardQuality,
        cardAttributes = data.cardAttributes, pileType = data.pileType,
        reduceMP = data.reduceMP, effectTimes = data.effectTimes;
    num = Math.min(num, caster.cardCtrl.getEmptySlotNum());
    let validCards = targets[0].cardCtrl.getRandomCardsFromPile(pileType, cardType, cardQuality, cardAttributes, num);
    if (validCards.length === 0)
        return;
    caster.cardCtrl.copyCards(validCards, targets[0], pileType, reduceMP, effectTimes);
};

module.exports = copy;
