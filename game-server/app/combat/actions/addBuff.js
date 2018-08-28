/**
 * Date: 2018/7/10
 * Author: liuguolai
 * Description:
 */
var consts = _require('../../public/consts');

var addBuff = {};

addBuff.entry = function (caster, skill, data, targets) {
    var duration = data.time || consts.Buff.BUFF_PERMANENT;
    for (var target of targets) {
        target.buffCtrl.addBuff(data.buffID, skill.slv, duration, caster.id, skill.sid);
    }
};

module.exports = addBuff;
