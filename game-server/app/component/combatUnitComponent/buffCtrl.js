/**
 * Date: 2018/7/9
 * Author: liuguolai
 * Description:
 */
var Component = _require('../component');
var util = _require('util');
var consts = _require('../../public/consts');
var buffTpl = _require('../../data/Buff');
var BaseBuff = _require('./buffLogic/baseBuff');
var logger = require('pomelo-logger').getLogger('game', __filename);

var BuffCtrl = function (entity) {
    Component.call(this, entity);
};

util.inherits(BuffCtrl, Component);
module.exports = BuffCtrl;

var pro = BuffCtrl.prototype;

pro.init = function (opts) {
    this.buffs = {};
    this.buffID2realID = {};

    this.armorBuffs = [];
    this.armorBuffsSotred = false;

    this.entity.state.on("EventDie", this._onDie.bind(this));
};

pro._onDie = function () {
    // todo: 或许会有不清的buff
    this._clearBuffs();
};

pro._clearBuffs = function () {
    var realIDs = Object.getOwnPropertyNames(this.buffs);
    for (var realID of realIDs) {
        var buff = this.buffs[realID];
        this.removeBuff(buff.id);
    }
};

//清除某种类型(tag[增减益标签])的buff.
pro.cleanBuffsByTag = function(tag,num){
    let buffs = this.getBuffsByTag(tag);
    let cnt = 0 ;
    //todo: 这里需要优化成随机取几个BUFF清掉。
    for(let buff of buffs ){
        this.removeBuff(buff.id ) ; //, buff.casterID , realID , buff.cellID );
        cnt++;
        if(cnt>=num){
            break ;
        }
    }
}

pro.getClientInfo = function () {
    var info = [];
    for (var buffID in this.buffs) {
        var buff = this.buffs[buffID];
        info.push(buff.getClientInfo());
    }
    return info;
};

var armorBuffSortFunc = function (a, b) {
    // 倒序，从后往前迭代
    return b.endTime - a.endTime;
};

// armor buff 结算
pro.calcArmorBuff = function (damage) {
    if (this.armorBuffs.length === 0)
        return damage;
    if (this.armorBuffsSotred === false) {
        this.armorBuffs.sort(armorBuffSortFunc);
        this.armorBuffsSotred = true;
    }
    for (var i = this.armorBuffs.length - 1; i >= 0; i--) {
        var leftDamage = this.armorBuffs[i].calcDamage(damage);
        if (leftDamage === -1)
            return 0;
        if (leftDamage == 0)
            return 0;
        damage = leftDamage;
    }
    return damage;
};

pro.addArmorBuffLogic = function (logic) {
    this.armorBuffs.push(logic);
    this.armorBuffsSotred = false;
};

pro.removeArmorBuffLogic = function (logic) {
    var idx = this.armorBuffs.indexOf(logic);
    if (idx >= 0)
        this.armorBuffs.splice(idx, 1);
    else
        throw new Error(this.entity.id + " removeArmorBuffLogic can not find buff");
};

pro._onAddBuff = function (buff) {
    buff.onEnter();
    this.emit("EventBuffAdd", this.entity, buff);
};

pro._onRemoveBuff = function (buff) {
    buff.onExit();
    this.emit("EventBuffRemoved", this.entity, buff);
};

pro.getBuff = function (id) {
    let realIDs = this.buffID2realID[id];
    if (realIDs) {
        for (let realID of realIDs) {
            return this.buffs[realID];
        }
    }
    return null;
};

pro._tryAddBuff = function (id, duration, casterID, data, realID) {
    if (!realID) {
        let bShare = buffTpl[id].Share;
        if (!bShare && casterID)
            realID = id + "_" + casterID;
        else
            realID = id.toString();
    }
    var newBuff = true, buff = null;
    let bStack = buffTpl[id].Stack;  // 是否叠加
    if (realID in this.buffs) {
        buff = this.buffs[realID];
        newBuff = false;
    }
    else {
        buff = new BaseBuff({
            owner: this,
            id: id,
            realID: realID,
            startTime: data.startTime,
        });
        if (!buff.canAttach(this.entity, duration, data))
            return;
    }
    if (newBuff) {
        this.buffs[realID] = buff;
        if (!(id in this.buffID2realID))
            this.buffID2realID[id] = new Set();
        this.buffID2realID[id].add(realID);
    }

    // todo: 判断独立的还是需要层级叠加，先默认全部独立
    if (newBuff || !bStack) {
        buff.addBuffCell(data);
    }
    else {
        buff.casterID = casterID;
        buff.addLayer(data.startTime, data.endTime);
    }

    this._onBuffUpdate(realID);

    if (newBuff)
        return buff;
};

pro.addBuff = function (id, lv, duration, casterID, skillID, realID, extraData ) {
    //logger.error("buffCtrl.addBuff: id, lv, duration, casterID, skillID, realID, extraData : ",id, lv, duration, casterID, skillID, realID, extraData );
    // todo: 默认死亡加不上，需加标记
    if (this.entity.state.isDead())
        return;
    // todo: 仇恨处理

    var startTime = new Date().getTime();
    var endTime = duration == consts.Buff.BUFF_PERMANENT ? consts.Buff.BUFF_PERMANENT : startTime + duration * 1000;
    var data = {
        id: id,
        level: lv,
        startTime: startTime,
        endTime: endTime,
        casterID: casterID,
        skillID: skillID,
        extraData: extraData
    }
    var buff = this._tryAddBuff(id, duration, casterID, data, realID);
    if (!buff)
        return;

    this._onAddBuff(buff);

    return buff;
};

pro.removeBuff = function (buffID, casterID, realID, cellID) {
    if (buffID in this.buffID2realID === false)
        return;

    var ids = [];
    if (!realID) {
        let bShare = buffTpl[buffID].Share;
        if (!bShare && casterID) {
            realID = buffID + "_" + casterID;
            if (this.buffID2realID[buffID].has(realID))
                ids = [realID];
        }
        else
            ids = Array.from(this.buffID2realID[buffID]);
    }
    else {
        if (this.buffID2realID[buffID].has(realID))
            ids = [realID];
    }

    for (var id of ids) {
        var buff = this.buffs[id];
        if (buff.canDetach(casterID)) {
            if (cellID) {
                buff.removeCell(cellID);
                // 还有cell没结束
                if (Object.keys(buff.cells).length > 0) {
                    this._onBuffUpdate(id);
                    return;
                }
            }
            this._onRemoveBuff(buff);
            delete this.buffs[id];
            this.buffID2realID[buffID].delete(id);
            if (this.buffID2realID[buffID].size === 0)
                delete this.buffID2realID[buffID];
            buff.clear();
            this._onBuffUpdate(id);
        }
    }
};

pro._onBuffUpdate = function (realID) {
    var buff = this.buffs[realID];
    var info = undefined;
    if (buff) {
        info = buff.getClientInfo();
    }
    this.entity.broadcast('onBuffUpdate', {
        targetID: this.entity.id,
        realID: realID,
        info: info
    });
};

pro.getBuffsByTag = function (tag) {
    let res = [];
    for (let realID in this.buffs) {
        let buff = this.buffs[realID];
        if (buff.data.Tag === tag || tag === consts.BuffTag.ALL ) {  //note
            res.push(buff);
        }
    }
    return res;
};

// 只移除buff不对其做处理
pro._removeBuffNoDeal = function (buff) {
    let realID = buff.realID, buffID = buff.id;
    delete this.buffs[realID];
    this.buffID2realID[buffID].delete(realID);
    if (this.buffID2realID[buffID].size === 0)
        delete this.buffID2realID[buffID];
    this._onBuffUpdate(realID);
};

// 只添加buff不做处理
pro._addBuffNoDeal = function (buff) {
    let realID = buff.realID, buffID = buff.id;
    this.buffs[realID] = buff;
    if (!(buffID in this.buffID2realID))
        this.buffID2realID[buffID] = new Set();
    this.buffID2realID[buffID].add(realID);
    this._onBuffUpdate(realID);
};

// 转移自身buff给别的玩家
pro.tranferBuff = function (buff, toEntity) {
    buff.changeBuffOwner(toEntity.buffCtrl);
    this._removeBuffNoDeal(buff);
    toEntity.buffCtrl._addBuffNoDeal(buff);
};

pro.destroy = function () {
    this._clearBuffs();
    Component.prototype.destroy.call(this);
};
