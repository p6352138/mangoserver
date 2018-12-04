/**
 * Date: 2018/7/9
 * Author: liuguolai
 * Description:
 */
let utils = _require('../../util/utils');

var damage = {};

// 伤害：伤害 = （攻击牌攻击 + 力量）×（1+自身伤害增幅 + 敌方易伤 - 自身伤害降低 - 敌方减伤）
damage.entry = async function (caster, skill, data, targets) {
    var baseDmg = data["dmg"];  // todo: 等级加成
    let delay = data.delay ;
    if( delay ){
        await utils.sleep(delay*1000);
    }
    // todo: 计算增幅
    var damage = baseDmg;
    for (var target of targets) {
        if( delay && (target.state.isDead() ||  target.isDestroyed()  ) ){  //note
            continue;
        }
        if (target.combat.onDamage(caster, damage, skill.sid)) {
            skill.addHitNum();
        }
    }

};

module.exports = damage;
