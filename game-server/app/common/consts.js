/**
 * Date: 2018/7/16
 * Author: liuguolai
 * Description: 服务器专用consts
 */
var uconsts = _require('../public/consts');

var consts = {
    APP_ID: "wx6e08467553158527",
    APP_SECRET: "4c5ce70f86af49bd8eba1901ff1adc62",

    OPEN_CROSS_SERVER: true,  // 是否开启跨服

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
    },

    // 货币消耗reason
    SpendReason: {
        EXCHANGE_SILVER: "exchangeSilver",
        EXCHANGE_POWER: "exchangePower",
        CARD_UPGRADE_FEE:"cardUpgradeFee"
    },

    // 货币获取原因
    GiveReason: {
        BAG_SELL: "bagSell",
    },

    BreakOp: {
        ALL: 0x1
    },

    // buff堆叠
    BuffStack: {
        INDEPENDENT: 0,  // 不堆叠
        ADD_LAYER: 1,  // 堆叠
        ADD_LAYER_REFRESH: 2,  // 堆叠且强制刷新
    },

    // buff标签
    BuffTag: {
        ALL:0,   //所有
        GAIN: 1,  // 增益
        DEBT: 2,  // 减益
        ARMOR: 3,  // 护甲
        SPECIAL: 4,  // 特殊
    }
};

for (var f in uconsts) {
    if(uconsts.hasOwnProperty(f)) {
        consts[f] = uconsts[f];
    }
};

module.exports = consts;
