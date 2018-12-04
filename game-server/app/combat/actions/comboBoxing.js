/**
 * Date: 2018/11/28
 * Author: liuguolai
 * Description: 组合拳，通过combo数计算伤害
 */
let damageAction = _require('./damage');

let comboBoxing = {};

comboBoxing.entry = function (caster, skill, data, targets) {
    let dmg = data.dmg * caster.combo;
    if (dmg <= 0)
        return;
    caster.comboComponent.resetCombo();
    damageAction.entry(caster, skill, {dmg: dmg}, targets);
};

module.exports = comboBoxing;
