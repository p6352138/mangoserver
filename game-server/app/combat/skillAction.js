/**
 * Date: 2018/7/9
 * Author: liuguolai
 * Description:
 */
var damage = _require('./actions/damage');
var addBuff = _require('./actions/addBuff');
var spawnSummoned = _require('./actions/spawnSummoned');
var drawCard = _require('./actions/drawCard');
var create = _require('./actions/create');
var reverse = _require('./actions/reverse');
var swordWheel = _require('./actions/swordWheel');
var heal = _require('./actions/heal');
var reliveTarget = _require('./actions/reliveTarget');
var dropCard = _require('./actions/dropCard');
var monsterSummoned = _require('./actions/monsterSummoned');
var normalDrawCard = _require('./actions/normalDrawCard');
var getMP = _require('./actions/getMP');

var skillAction = module.exports;

var actionMap = {
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
};

skillAction.getAction = function (actionName) {
    return actionMap[actionName];
};
