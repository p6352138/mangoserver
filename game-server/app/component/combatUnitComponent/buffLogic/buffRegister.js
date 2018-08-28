/**
 * Date: 2018/7/10
 * Author: liuguolai
 * Description:
 */

var AddArm = _require('./addArm');
var DamageListenerBuff = _require('./damageListenerBuff');
var DieListenerBuff = _require('./dieListenerBuff');
var DrawCardListenerBuff = _require('./drawCardListenerBuff');
var HealBuff = _require('./healBuff');
var ModPropBuff = _require('./modPropBuff');
var ModPropPctBuff = _require('./modPropPctBuff');
var RecoverMpRateBuff = _require('./recoverMpRateBuff');
var UseCardListenerBuff = _require('./useCardListenerBuff');

var buffLogic = {
    addArm: AddArm,
    damageListener: DamageListenerBuff,
    dieListener: DieListenerBuff,
    drawCardListener: DrawCardListenerBuff,
    heal: HealBuff,
    modProp: ModPropBuff,
    modPropPct: ModPropPctBuff,
    recoverMpRate: RecoverMpRateBuff,
    useCardListener: UseCardListenerBuff,
};

var buffRegister = module.exports;

buffRegister.getBuffLogic = function (clzName) {
    return buffLogic[clzName];
};
