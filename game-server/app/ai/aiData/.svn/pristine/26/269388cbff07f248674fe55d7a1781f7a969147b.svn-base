// !!!auto generate!!!
var bt_consts = _require('../bt_consts');
var btreeManager = _require('../btreeManager');
var nodes = _require('../nodes/leafNodes');
var consts = _require('../../common/consts');

var TREE_NAME = "yingwanli";

/**
 * 属性判断
 */
var n0000_checkAttributes = function(owner) {
    return nodes.checkAttributes(owner, "self", "hpPct", "<=", 0.7);
};


/**
 * 属性判断
 */
var n000100_checkAttributes = function(owner) {
    return nodes.checkAttributes(owner, "self", "mp", "<", 4);
};


/**
 * 跳出树，不执行之后的节点。返回BREAK
 */
var n000101_quit = function(owner) {
    return bt_consts.StatusType.BREAK;
};


/**
 * 选择仇恨值第1大目标
 */
var n000110_selectHatredTarget = function(owner) {
    return nodes.selectHatredTarget(owner, 0);
};


/**
 * 是否可使用卡牌 101404
 */
var n000111_canUseCard = function(owner) {
    return nodes.canUseCard(owner, 101404);
};


/**
 * 使用卡牌 id：101404
 */
var n000112_useCard = function(owner) {
    return nodes.useCard(owner, 101404);
};


/**
 * 属性判断
 */
var n0100_checkAttributes = function(owner) {
    return nodes.checkAttributes(owner, "self", "hpPct", "<=", 0.35);
};


/**
 * 属性判断
 */
var n010100_checkAttributes = function(owner) {
    return nodes.checkAttributes(owner, "self", "mp", "<", 4);
};


/**
 * 跳出树，不执行之后的节点。返回BREAK
 */
var n010101_quit = function(owner) {
    return bt_consts.StatusType.BREAK;
};


/**
 * 选择仇恨值第1大目标
 */
var n010110_selectHatredTarget = function(owner) {
    return nodes.selectHatredTarget(owner, 0);
};


/**
 * 是否可使用卡牌 101404
 */
var n010111_canUseCard = function(owner) {
    return nodes.canUseCard(owner, 101404);
};


/**
 * 使用卡牌 id：101404
 */
var n010112_useCard = function(owner) {
    return nodes.useCard(owner, 101404);
};


/**
 * 选择仇恨值第1大目标
 */
var n020_selectHatredTarget = function(owner) {
    return nodes.selectHatredTarget(owner, 0);
};


/**
 * 使用卡牌 
 * cids：[101401, 101402, 101405]
 * weights: [2, 1, 1]
 */
var n021_randomUseCardByID = function(owner) {
    return nodes.randomUseCardByID(owner, [101401, 101402, 101405], [2, 1, 1]);
};


// btree define
var bt_code = {
    n_root: {type: bt_consts.NodeType.ROOT, children: ['n0_Selector']},
    // Selector
    n0_Selector: {type: bt_consts.NodeType.SELECTOR, children: ['n00_DecoratorCountLimit', 'n01_DecoratorCountLimit', 'n02_Sequence']},
    // 子节点成功执行1次
    n00_DecoratorCountLimit: {type: bt_consts.NodeType.FILTER_EXE_TIMES, cnt: 1, onlySuccess: true, children: ['n000_Sequence']},
    // Sequence
    n000_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n0000_checkAttributes', 'n0001_Selector']},
    n0000_checkAttributes: {type: bt_consts.NodeType.LEAF, func: n0000_checkAttributes},
    // Selector
    n0001_Selector: {type: bt_consts.NodeType.SELECTOR, children: ['n00010_Sequence', 'n00011_Sequence']},
    // Sequence
    n00010_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n000100_checkAttributes', 'n000101_quit']},
    n000100_checkAttributes: {type: bt_consts.NodeType.LEAF, func: n000100_checkAttributes},
    n000101_quit: {type: bt_consts.NodeType.LEAF, func: n000101_quit},
    // Sequence
    n00011_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n000110_selectHatredTarget', 'n000111_canUseCard', 'n000112_useCard']},
    n000110_selectHatredTarget: {type: bt_consts.NodeType.LEAF, func: n000110_selectHatredTarget},
    n000111_canUseCard: {type: bt_consts.NodeType.LEAF, func: n000111_canUseCard},
    n000112_useCard: {type: bt_consts.NodeType.LEAF, func: n000112_useCard},
    // 子节点成功执行1次
    n01_DecoratorCountLimit: {type: bt_consts.NodeType.FILTER_EXE_TIMES, cnt: 1, onlySuccess: true, children: ['n010_Sequence']},
    // Sequence
    n010_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n0100_checkAttributes', 'n0101_Selector']},
    n0100_checkAttributes: {type: bt_consts.NodeType.LEAF, func: n0100_checkAttributes},
    // Selector
    n0101_Selector: {type: bt_consts.NodeType.SELECTOR, children: ['n01010_Sequence', 'n01011_Sequence']},
    // Sequence
    n01010_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n010100_checkAttributes', 'n010101_quit']},
    n010100_checkAttributes: {type: bt_consts.NodeType.LEAF, func: n010100_checkAttributes},
    n010101_quit: {type: bt_consts.NodeType.LEAF, func: n010101_quit},
    // Sequence
    n01011_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n010110_selectHatredTarget', 'n010111_canUseCard', 'n010112_useCard']},
    n010110_selectHatredTarget: {type: bt_consts.NodeType.LEAF, func: n010110_selectHatredTarget},
    n010111_canUseCard: {type: bt_consts.NodeType.LEAF, func: n010111_canUseCard},
    n010112_useCard: {type: bt_consts.NodeType.LEAF, func: n010112_useCard},
    // Sequence
    n02_Sequence: {type: bt_consts.NodeType.SEQUENCE, children: ['n020_selectHatredTarget', 'n021_randomUseCardByID']},
    n020_selectHatredTarget: {type: bt_consts.NodeType.LEAF, func: n020_selectHatredTarget},
    n021_randomUseCardByID: {type: bt_consts.NodeType.LEAF, func: n021_randomUseCardByID}
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
