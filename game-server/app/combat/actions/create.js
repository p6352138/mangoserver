/**
 * Date: 2018/7/17
 * Author: liuguolai
 * Description: 创建手牌
 */
let consts = _require('../../common/consts');

let create = {};

create.entry = function (caster, skill, data, targets) {
    let cardID = data.cardID;
    let num = data.num;
    let rate = data.rate;  // 概率
    let pileType = data.pileType || consts.PileType.IN_HANDS;
    if (rate && Math.random() > rate)
        return;
    for (var target of targets) {
        target.cardCtrl.createCards(cardID, num, pileType);
    }
};

module.exports = create;
