/**
 * Date: 2018/7/9
 * Author: liuguolai
 * Description:
 */
let damage = _require('./actions/damage');
let addBuff = _require('./actions/addBuff');
let cleanBuff = _require('./actions/cleanBuff');
let spawnSummoned = _require('./actions/spawnSummoned');
let drawCard = _require('./actions/drawCard');
let create = _require('./actions/create');
let reverse = _require('./actions/reverse');
let swordWheel = _require('./actions/swordWheel');
let heal = _require('./actions/heal');
let reliveTarget = _require('./actions/reliveTarget');
let dropCard = _require('./actions/dropCard');
let monsterSummoned = _require('./actions/monsterSummoned');
let normalDrawCard = _require('./actions/normalDrawCard');
let getMP = _require('./actions/getMP');
let bounce = _require('./actions/bounce');
let costSummoned = _require('./actions/costSummoned');
let crushedIce = _require('./actions/crushedIce');
let blackSnow = _require('./actions/blackSnow');
let buffTime = _require('./actions/buffTime');
let powerUp = _require('./actions/powerUp');
let copy = _require('./actions/copy');
let currentHPDamage = _require('./actions/currentHPDamage');
let exchangeArm = _require('./actions/exchangeArm');
let breakArm = _require('./actions/breakArm');
let randomAddBuff = _require('./actions/randomAddBuff');
let comboBoxing = _require('./actions/comboBoxing');
let comboTrigger = _require('./actions/comboTrigger');
let bomb = _require('./actions/bomb');

let skillAction = module.exports;

let actionMap = {
    damage: damage,
    addBuff: addBuff,
    spawnSummoned: spawnSummoned,
    drawCard: drawCard,
    create: create,
    reverse: reverse,
    swordWheel: swordWheel,
    heal: heal,
    reliveTarget: reliveTarget,
    dropCard: dropCard,
    monsterSummoned: monsterSummoned,
    normalDrawCard: normalDrawCard,
    getMP: getMP,
    bounce: bounce,
    costSummoned: costSummoned,
    crushedIce: crushedIce,
    blackSnow: blackSnow,
    buffTime: buffTime,
    powerUp: powerUp,
    copy: copy,
    currentHPDamage: currentHPDamage,
    exchangeArm: exchangeArm,
    breakArm: breakArm,
    randomAddBuff: randomAddBuff,
    comboBoxing: comboBoxing,
    comboTrigger: comboTrigger,
    cleanBuff:cleanBuff,
    bomb: bomb
};

skillAction.getAction = function (actionName) {
    return actionMap[actionName];
};
