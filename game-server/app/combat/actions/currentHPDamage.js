/**
 * Date: 2018/11/24
 * Author: liuguolai
 * Description: 当前血量伤害
 */
let damageAction = _require('./damage');

let currentHPDamage = {};

currentHPDamage.entry = function (caster, skill, data, targets) {
    let damage = Math.ceil(caster.hp * data.dmg);
    damageAction.entry(caster, skill, {dmg: damage}, targets);
};

module.exports = currentHPDamage;
