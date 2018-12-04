/**
 * Date: 2018/7/3
 * Author: liuguolai
 * Description: 战斗单元属性定义
 */

var properties = {
    hp: 999,  // 生命
    maxHp: 999,  // 最大生命
    mp: 6,  // 灵力
    maxMp: 10,  // 最大灵力
    thew: 0,  // 体力
    maxThew: 0,  // 最大体力
    armor: 0,  // 护甲
    strength: 0,  // 力量
    stamina: 0,  // 耐力
    intellect: 0,  // 智慧
    agile: 0,  // 敏捷
    scale: 1,  // 模型缩放

    // 二级属性
    powerUp: 0,  // 伤害增幅
    powerDown: 0,  // 伤害降低
    vulnerable: 0,  // 易伤
    damageReduce: 0,  // 减伤

    crit: 0,  // 暴击率
    critDmg: 0,  // 暴击伤害
    critHeal: 0,  // 暴击治疗
    healIncrease: 0,  // 治疗增益
    healReduce: 0,  // 治疗减益

    combo: 0,  // 连击数

    feature: 0,  // 功能点开关
};

module.exports = properties;
