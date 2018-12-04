/**
 * Date: 2018/11/30
 * Author: liuguolai
 * Description: 炸弹，每间隔Ns伤害降低0
 */
let damageAction = _require('./damage');

let bomb = {};

bomb.entry = function (caster, skill, data, targets) {
    let card = skill.getOwnerCard();
    if (!card)
        return;
    let dmg = data.dmg, time = data.time, dmgDown = data.dmgDown;
    let downTimes = Math.floor((new Date().getTime() - card.genTime) / 1000 / time);
    let damage = Math.floor(dmg * Math.max(0, 1 - dmgDown * downTimes));
    damageAction.entry(caster, skill, {dmg: damage}, targets);
};

module.exports = bomb;
