/**
 * Date: 2018/7/17
 * Author: liuguolai
 * Description: 创建手牌
 */

var create = {};

create.entry = function (caster, skill, data, targets) {
    var cardID = data.cardID;
    var num = data.num;
    for (var target of targets) {
        target.cardCtrl.createCardsInHand(cardID, num);
    }
};

module.exports = create;
