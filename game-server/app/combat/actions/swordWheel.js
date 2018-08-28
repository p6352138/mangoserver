/**
 * Date: 2018/7/17
 * Author: liuguolai
 * Description: 召唤物单体伤害
 */

var swordWheel = {};

swordWheel.entry = function (caster, skill, data, targets) {
    var consume = data.consume;
    var perDmg = data.dmg;  // 每个伤害
    var type = data.type;

    var dungeonEnt = caster.owner;
    var groupId = caster.groupId;
    // 受击次数
    var summonsNum = dungeonEnt.getSummonsNumByType(groupId, true, type);
    if (!summonsNum)
        return;

    var sid = skill.sid;
    var damageInfo = {};  // 受伤信息
    for (var target of targets) {
        if (target.state.isDead())
            continue;
        damageInfo[target.id] = target.combat.onDamageWithTimes(caster, perDmg, sid, summonsNum);
    }
    if (consume) {
        dungeonEnt.clearSummonsByType(groupId, true, type);
    }
    else {
        dungeonEnt.resetSummonsByType(groupId, true, type, summonsNum);
    }
    // notify
    dungeonEnt.broadcast("onSwordWheel", {
        caster: caster.id,
        sid: sid,
        damageInfo: damageInfo,
        summons: dungeonEnt.getSummonsByType(groupId, true, type)
    });
};

module.exports = swordWheel;
