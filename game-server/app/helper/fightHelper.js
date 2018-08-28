/**
 * Date: 2018/6/21
 * Author: liuguolai
 * Description: 战斗辅助函数
 */

var fightHelper = module.exports;
var skillTpl = _require('../data/Skill');

// 洗牌
fightHelper.shuffle = function (cards) {
    var i, j, tmp;
    for (i = cards.length; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        tmp = cards[j];
        cards[j] = cards[i - 1];
        cards[i - 1] = tmp;
    }
    return cards;
};

// 伤害：伤害 = （攻击牌攻击 + 力量）×（1+自身伤害增幅 + 敌方易伤 - 自身伤害降低 - 敌方减伤）
fightHelper.calcDamage = function (attacker, target, damage) {
    var baseDmg = damage + attacker.strength;
    return Math.floor(baseDmg * (1 + 0 + target.vulnerable - 0 - 0));
};

// 仇恨值 = 仇恨系数 * 造成的伤害/治疗 + 仇恨常数
fightHelper.calcHatred = function (sid, damage) {
    var skillConf = skillTpl[sid][1];
    return Math.floor(skillConf.HatredCoef * damage + skillConf.HatredConst);
};

fightHelper.filterAlive = function (ent) {
    return ent.state.isAlive();
};

fightHelper.filterDead = function (ent) {
    return ent.state.isDead();
};

fightHelper.filterNotDestroyed = function (ent) {
    return !ent.isDestroyed();
};
