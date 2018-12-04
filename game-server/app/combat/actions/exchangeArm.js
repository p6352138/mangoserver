/**
 * Date: 2018/11/24
 * Author: liuguolai
 * Description: 护甲互换
 */
let consts = _require('../../common/consts');

let exchangeArm = {};

exchangeArm.entry = function (caster, skill, data, targets) {
    if (targets.length === 0)
        return;
    let target = targets[0];
    let casterArmorBuffs = caster.buffCtrl.getBuffsByTag(consts.BuffTag.ARMOR), casterArmor = caster.armor;
    let targetArmorBuffs = target.buffCtrl.getBuffsByTag(consts.BuffTag.ARMOR), targetArmor = target.armor;
    // 互换buff
    for (let buff of casterArmorBuffs) {
        caster.buffCtrl.tranferBuff(buff, target);
    }
    for (let buff of targetArmorBuffs) {
        target.buffCtrl.tranferBuff(buff, caster);
    }
    // 特殊处理，armor在玩家身上有逻辑缓存，互换
    let tmp = caster.buffCtrl.armorBuffs;
    caster.buffCtrl.armorBuffs = target.buffCtrl.armorBuffs;
    target.buffCtrl.armorBuffs = tmp;
    // 设置最终当前armor值（包括固定护甲）
    caster.prop.modProp('armor', targetArmor - casterArmor);
    target.prop.modProp('armor', casterArmor - targetArmor);
};

module.exports = exchangeArm;
