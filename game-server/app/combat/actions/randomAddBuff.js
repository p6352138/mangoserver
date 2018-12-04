/**
 * Date: 2018/11/27
 * Author: liuguolai
 * Description: 多选1添加buff
 */
let randomAddBuff = {};

randomAddBuff.entry = function (caster, skill, data, targets) {
    let buffIDs = data.buffIDs, rateList = data.rateList, timeList = data.timeList;
    let totalRate = 0;
    for (let rate of rateList) {
        totalRate += rate;
    }
    let randVal = Math.random() * totalRate, curVal = 0, idx;
    for (idx = 0; idx < rateList.length; idx++) {
        curVal += rateList[idx];
        if (curVal > randVal)
            break;
    }
    let buffID = buffIDs[idx], duration = timeList[idx];
    let count = data.count || 1;
    for (let i = 0; i < count; i++) {
        for (let target of targets) {
            target.buffCtrl.addBuff(buffID, skill.slv, duration, caster.id, skill.sid);
        }
    }
};

module.exports = randomAddBuff;