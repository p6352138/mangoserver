/**
 * Date: 2018/11/26
 * Author: liuhaibo
 * Description:cleanBuff:{"type":1,"num":1}
                         清除buff：数量为1～99.
                                   类型: 1:增益
                                         2.减益
                                         3.护甲
                                         4.特殊
                                         all:为清除所有

 */
let consts = _require('../../public/consts');
let assert = require('assert');

let cleanBuff = {};

cleanBuff.entry = function (caster, skill, data, targets) {
    let tag  = data.type  ;
    let count = data.count || 1 ;
    let num = data.num || 1 ;
    assert(tag);
    for (let i = 0; i < count; i++) {
        for (let target of targets) {
            target.buffCtrl.cleanBuffsByTag(tag, num);
        }
    }
};

module.exports = cleanBuff;
