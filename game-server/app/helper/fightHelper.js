/**
 * Date: 2018/6/21
 * Author: liuguolai
 * Description: 战斗辅助函数
 */

var fightHelper = module.exports;
var skillTpl = _require('../data/Skill');
let consts = _require('../common/consts');
let dispatcher = _require('../util/dispatcher');
let pomelo = require('pomelo');

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

// 是否暴击
fightHelper.isCrit = function (attacker) {
    if (attacker.crit) {
        let randVal = Math.random();
        if (randVal < attacker.crit)
            return 1;
    }
    return 0;
};

// 伤害：伤害 = （攻击牌攻击 + 力量）×（1+自身伤害增幅 + 敌方易伤 - 自身伤害降低 - 敌方减伤）+ 火印伤害*层数 + 恶魔之链传递伤害
fightHelper.calcDamage = function (attacker, target, damage, bCrit) {
    let baseDmg = damage + attacker.strength;
    baseDmg *= (1 + attacker.powerUp + target.vulnerable - target.powerDown - target.damageReduce);
    // 是否暴击
    if (bCrit) {
        baseDmg *= (1.5 + attacker.critDmg);
    }
    let res = Math.floor(baseDmg + target.combat.getAttackExtraDamage(attacker.id));
    return res;
};

// 治疗：治疗 = 治疗量 ×（1+自身治疗增益 + 目标治疗增益 - 自身治疗减益 - 目标治疗减益）
fightHelper.calcHeal = function (attacker, target, val, bCrit) {
    let baseVal = val * (1 + attacker.healIncrease + target.healIncrease - attacker.healReduce - target.healReduce);
    // 是否暴击
    if (bCrit) {
        baseVal *= (1.5 + attacker.critHeal);
    }
    return Math.floor(baseVal);
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

/**
 * 计算天梯分 R'x=Rx+K（Sx-Ex）
 * Ea：预期队伍A的胜负值，Ea=1/(1+10^[(Rb-Ra)/400]) 
 * Eb：预期队伍B的胜负值，Eb=1/(1+10^[(Ra-Rb)/400])
 * Sa：实际胜负值，胜=1，平=0.5，负=0
 * 返回 A、B队队员的天梯分变动
 * @param ra A队平均天梯分
 * @param rb B队平均天梯分
 */
fightHelper.calcLadderScore = function (ra, rb, aResult) {
    let ea = 1 / (1 + Math.pow(10, (rb - ra) / 400));
    let eb = 1 / (1 + Math.pow(10, (ra - rb) / 400));
    let K = 1, sa, sb;
    if (aResult === consts.FightResult.LOSE) {
        sa = 0;
        sb = 1;
    }
    else if (aResult === consts.FightResult.WIN) {
        sa = 1;
        sb = 0;
    }
    else {
        sa = 0.5;
        sb = 0.5;
    }
    return [K * (sa - ea), K * (sb - eb)];
};

// 获取单人PVE战斗服
fightHelper.getSinglePVEServer = function (entity) {
    let fightServerIds = pomelo.app.get("fightIdsMap")["PVE"][1];
    let server = dispatcher.dispatch(entity.id, fightServerIds);
    return server;
};
