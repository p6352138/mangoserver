/**
 * Date: 2018/7/10
 * Author: liuguolai
 * Description:
 */
let consts = _require('../../public/consts');
var logger = require('pomelo-logger').getLogger('game', __filename);

let addBuff = {};

addBuff.entry = function (caster, skill, data, targets) {
    let duration = data.time || consts.Buff.BUFF_PERMANENT;
    let count = data.count || 1;
    let exData = { cardInf: skill.exData.cardInf  };

    for (let i = 0; i < count; i++) {
        for (let target of targets) {
            target.buffCtrl.addBuff(data.buffID, skill.slv, duration, caster.id, skill.sid , null, exData );
        }
    }
};

module.exports = addBuff;
