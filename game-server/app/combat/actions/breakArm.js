/**
 * Date: 2018/11/26
 * Author: liuguolai
 * Description: 削甲
 */
let breakArm = {};

breakArm.entry = function (caster, skill, data, targets) {
    let val = data.breakArm;
    for (let target of targets) {
        target.combat.subArmorByDamage(val, false);
    }
};

module.exports = breakArm;
