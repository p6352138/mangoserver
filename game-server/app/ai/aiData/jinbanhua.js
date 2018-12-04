// !!!auto generate!!!
var bt_consts = _require('../bt_consts');
var btreeManager = _require('../btreeManager');
var nodes = _require('../nodes/leafNodes');
var consts = _require('../../common/consts');

var TREE_NAME = "jinbanhua";

/**
 * 属性判断
 */
var n000_checkAttributes = function(owner) {
    return nodes.checkAttributes(owner, "self", "hpPct", "<=", 0.5);
};


/**
 * 属性判断
 */
var n00100_checkAttributes = function(owner) {
    return nodes.checkAttributes(owner, "self", "mp", "<", 4);
};


/**
 * 跳出树，不执行之后的节点。返回BREAK
 */
var n00101_quit = function(owner) {
    return bt_consts.StatusType.BREAK;
};


/**
 * 选择仇恨值第1大目标
 */
var n00110_selectHatredTarget = function(owner) {
    return nodes.selectHatredTarget(owner, 0);
};


/**
 * 是否可使用卡牌 101302
 */
var n00111_canUseCard = function(owner) {
    return nodes.canUseCard(owner, 101302);
};


/**
 * 使用卡牌 id：101302
 */
var n00112_useCard = function(owner) {
    return nodes.useCard(owner, 101302);
};


/**
 * 选择仇恨值第1大目标
 */
var n010_selectHatredTarget = function(owner) {
    return nodes.selectHatredTarget(owner, 0);
};


/**
 * 使用卡牌 
 * cids：[101301, 101303]
 * weights: [3, 1]
 */
var n011_randomUseCardByID = function(owner) {
    return nodes.randomUseCardByID(owner, [101301, 101303], [3, 1]);
};


// btree define
var bt_code = {
    n_root: {type: bt_consts.NodeType.ROOT, children: ['n0_Selector']},
    // Selector
    n0_Selector: {type: bt_consts.NodeType.SELECTOR, children: ['n00_Sequence', 'n01_Sequence']},
    // Sequence
    n00_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n000_checkAttributes', 'n001_Selector']},
    n000_checkAttributes: {type: bt_consts.NodeType.LEAF, func: n000_checkAttributes},
    // Selector
    n001_Selector: {type: bt_consts.NodeType.SELECTOR, children: ['n0010_Sequence', 'n0011_Sequence']},
    // Sequence
    n0010_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n00100_checkAttributes', 'n00101_quit']},
    n00100_checkAttributes: {type: bt_consts.NodeType.LEAF, func: n00100_checkAttributes},
    n00101_quit: {type: bt_consts.NodeType.LEAF, func: n00101_quit},
    // Sequence
    n0011_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n00110_selectHatredTarget', 'n00111_canUseCard', 'n00112_useCard']},
    n00110_selectHatredTarget: {type: bt_consts.NodeType.LEAF, func: n00110_selectHatredTarget},
    n00111_canUseCard: {type: bt_consts.NodeType.LEAF, func: n00111_canUseCard},
    n00112_useCard: {type: bt_consts.NodeType.LEAF, func: n00112_useCard},
    // Sequence
    n01_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n010_selectHatredTarget', 'n011_randomUseCardByID']},
    n010_selectHatredTarget: {type: bt_consts.NodeType.LEAF, func: n010_selectHatredTarget},
    n011_randomUseCardByID: {type: bt_consts.NodeType.LEAF, func: n011_randomUseCardByID}
};


var res = btreeManager.createTree(TREE_NAME, bt_code);
if (!res) {
    throw new Error("load btree failed!!! tree name is " + TREE_NAME);
};

// 引入子树
for (var name in bt_code) {
    if (bt_code[name].type == bt_consts.NodeType.SUBTREE)
        _require('./' + bt_code[name].subtree);
};
