/**
 * Date: 2018/7/16
 * Author: liuguolai
 * Description: 服务器专用consts
 */
var uconsts = _require('../public/consts');

var consts = {
    APP_ID: "wx7c329421cad774dc",
    APP_SECRET: "fa4649c58a61940a2b8497f640795a8d",

    // entity state
    ENTITY_STATE_INITED: 1,
    ENTITY_STATE_DESTROYED: 2,

    // 属性名定义(ai)
    AttributeName: {
        HP: "hp",
        HP_PCT: "hpPct",
        MP: "mp",
        THEW: "thew",
        IN_HAND_CARDS_NUM: "inHandCardsNum",  // 手牌数
    },

    // 排序类型（ai）
    SortType: {
        UP: "up",  // 升序
        DOWN: "down",  // 降序
    },

    // 仇恨类型（ai）
    HatredType: {
        FIRST: 1,  // 仇恨最好
        SECOND: 2,  // 仇恨次高
    }
};

for (var f in uconsts) {
    if(uconsts.hasOwnProperty(f)) {
        consts[f] = uconsts[f];
    }
};

module.exports = consts;
