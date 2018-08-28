/**
 * Date: 2018/6/19
 * Author: liuguolai
 * Description: 负责component注册
 */
var LoggerComponent = _require('./entityComponent/loggerComponent');

var DungeonCtrl = _require('./avatarComponent/dungeonCtrl');
var HeroComponent = _require('./avatarComponent/heroComponent');
var MatchComponent = _require('./avatarComponent/matchComponent');

var AIBehavior = _require('./combatUnitComponent/aiBehavior');
var BuffCtrl = _require('./combatUnitComponent/buffCtrl');
var CardCtrl = _require('./combatUnitComponent/cardCtrl');
var CombatCtrl = _require('./combatUnitComponent/combatCtrl');
var CombatUnitState = _require('./combatUnitComponent/combatUnitState');
var HatredComponent = _require('./combatUnitComponent/hatredComponent');
var PropertyCtrl = _require('./combatUnitComponent/propertyCtrl');
var SkillCtrl = _require('./combatUnitComponent/skillCtrl');

var componentClass = {
    logger: LoggerComponent,

    dungeon: DungeonCtrl,
    hero: HeroComponent,
    match: MatchComponent,

    AI: AIBehavior,
    buffCtrl: BuffCtrl,
    cardCtrl: CardCtrl,
    combat: CombatCtrl,
    state: CombatUnitState,
    hatred: HatredComponent,
    prop: PropertyCtrl,
    skillCtrl: SkillCtrl,
};

var componentRegister = module.exports;

componentRegister.getComponent = function (name) {
    return componentClass[name];
};
