/**
 * Date: 2018/7/19
 * Author: liuguolai
 * Description: 弃卡牌
 */
var dropCard = {};

dropCard.entry = function (caster, skill, data, targets) {
    var piletype = data.piletype;
    let exData = skill.exData, dropIdxList = [];
    if ( !(exData.exCards) )
        return;
    let usedCardIdx = exData.usedCardIdx;
    for (let exCardInfo of exData.exCards) {
        if (exCardInfo.idx < usedCardIdx)
            dropIdxList.push(exCardInfo.idx);
        else {
            dropIdxList.push(exCardInfo.idx - 1);
        }
    }
    dropIdxList.sort(function (a, b) {
        return b - a;
    })
    for (var target of targets) {
        target.cardCtrl.dropCard(dropIdxList, piletype);
    }
};

module.exports = dropCard;
