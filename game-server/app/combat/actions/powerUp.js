/**
 * Date: 2018/11/15
 * Author: liuguolai
 * Description:  卡牌威力增加
 */
let powerUp = {};

powerUp.entry = function (caster, skill, data, targets) {
    let upPercent = data.powerUp, cardType = data.cardType,
        pileType = data.pileType, effectTimes = data.effectTimes;
    for (let target of targets) {
        target.cardCtrl.powerUpCard(pileType, cardType, upPercent, effectTimes);
    }
};

module.exports = powerUp;
