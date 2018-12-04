/**
 * Date: 2018/11/29
 * Author: liuguolai
 * Description: combo数触发技能
 */
let comboTrigger = {};

comboTrigger.entry = function (caster, skill, data, targets) {
    let needCombo = data.combo, skillID = data.skillID;
    if (caster.combo < needCombo)
        return;
    // 触发技能
    caster.skillCtrl.useSkill(skillID, skill.slv, skill.tid);
};

module.exports = comboTrigger;
