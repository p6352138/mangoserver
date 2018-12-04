/**
 * Date: 2018/7/18
 * Author: liuguolai
 * Description: 治疗
 */
let heal = {};

heal.entry = function (caster, skill, data, targets) {
    let healVal = data.heal, healPct = data.healPct;
    for (var target of targets) {
        target.combat.onHeal(caster, healVal || Math.floor(target.maxHp * healPct), skill.sid);
    }
};

module.exports = heal;
