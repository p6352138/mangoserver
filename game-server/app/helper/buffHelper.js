/**
 * Date: 2018/11/21
 * Author: liuguolai
 * Description: buff辅助接口
 */
let buffTpl = _require('../data/Buff');
let buffUpTpl = _require('../data/BuffUp');

let buffHelper = module.exports;

buffHelper.logicCache = {};

let getBuffUpValue = function (buffType, paramName, lv) {
    if (!buffUpTpl.hasOwnProperty(buffType))
        return 0;
    if (!buffUpTpl[buffType].hasOwnProperty(paramName))
        return 0;
    return buffUpTpl[buffType][paramName][lv - 1];
};

buffHelper.getBuffLogic = function (buffID, lv) {
    let cacheKey = buffID + "_" + lv;
    if (this.logicCache.hasOwnProperty(cacheKey))
        return this.logicCache[cacheKey];
    let res = {}, logic = buffTpl[buffID].Logic, type = buffTpl[buffID].Type;
    for (let key in logic) {
        if (typeof logic[key] === 'function') {
            res[key] = logic[key](getBuffUpValue(type, key, lv));
        }
        else {
            res[key] = logic[key];
        }
    }
    this.logicCache[cacheKey] = res;
    return res;
};
