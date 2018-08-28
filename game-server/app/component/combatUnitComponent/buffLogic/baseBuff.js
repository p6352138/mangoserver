/**
 * Date: 2018/7/9
 * Author: liuguolai
 * Description: buff 基类
 */
var buffTpl = _require('../../../data/Buff');
var consts = _require('../../../public/consts');
var buffRegister = _require('./buffRegister');

var BuffCell = function (opts) {
    this.owner = opts.owner;
    this.id = 0;  // cell id
    this.level = opts.level;
    this.startTime = opts.startTime;
    this.endTime = opts.endTime;
    this.casterID = opts.casterID;
    this.skillID = opts.skillID;

    Object.defineProperty(this, 'entity', {
        get: function () {
            return this.owner.owner.entity;
        }
    });

    Object.defineProperty(this, 'buff', {
        get: function () {
            return this.owner;
        }
    });

    Object.defineProperty(this, 'buffID', {
        get: function () {
            return this.buff.id;
        }
    });

    // init buff logic
    this._initLogics();
    this.activeFlag = false;
    this._timer = null;
};

BuffCell.prototype._initLogics = function () {
    this.logics = [];
    // 可能后续一个buff由多个逻辑组成，弄个高扩展的框架，先唯一读表
    var buffType = buffTpl[this.buffID].Type;
    var Class = buffRegister.getBuffLogic(buffType);
    var logic = new Class(this.buff, this, this.buffID);
    this.logics.push(logic);
};

BuffCell.prototype.getClientInfo = function () {
    return {
        endTime: this.endTime,
        casterID: this.casterID,
    };
};

BuffCell.prototype.onEnter = function () {
    if (this.activeFlag)
        return;
    this.activeFlag = true;
    for (var logic of this.logics) {
        logic.onEnter();
    }
    if (this.endTime != consts.Buff.BUFF_PERMANENT) {
        this._timer = setTimeout(this.onTimeout.bind(this), this.endTime - this.startTime);
    }
};

BuffCell.prototype.onExit = function () {
    if (!this.activeFlag)
        return;
    this.activeFlag = false;
    if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
    }
    for (var logic of this.logics) {
        logic.onExit();
    }
    this.logics = null;
};

BuffCell.prototype.onTimeout = function () {
    this._timer = null;
    this.onExit();
    delete this.buff.cells[this.id];
    if (Object.keys(this.buff.cells).length === 0) {
        this.entity.buffCtrl.removeBuff(this.buff.id, this.casterID);
    }
};

//////////////////////////////////////////

var BaseBuff = function (opts) {
    this.owner = opts.owner;
    this.id = opts.id;  // buffID
    this.realID = opts.realID;
    this.startTime = opts.startTime;
    this.endTime = 0;
    this.cells = {};  // 多层buff

    this.activeFlag = false;  // 是否已经激活
    this.curCellID = 1;

    Object.defineProperty(this, 'data', {
        get: function () {
            return buffTpl[this.id];
        }
    });
};

module.exports = BaseBuff;

var pro = BaseBuff.prototype;

pro.getClientInfo = function () {
    var info = {
        id: this.id,
        realID: this.realID,
    }
    var cells = [];
    for (var cellID in this.cells) {
        var cell = this.cells[cellID];
        cells.push(cell.getClientInfo());
    }
    info["cells"] = cells;
    return info;
};

pro._genID = function () {
    return this.curCellID ++;
};

pro.addBuffCell = function (data) {
    var cellID = this._genID();
    data["owner"] = this;
    var cell = new BuffCell(data);
    cell.id = cellID;
    this.cells[cellID] = cell;
    if (this.endTime != consts.Buff.BUFF_PERMANENT) {
        this.endTime = cell.endTime === consts.Buff.BUFF_PERMANENT ?
            consts.Buff.BUFF_PERMANENT : Math.max(this.endTime, cell.endTime);
    }
    if (this.activeFlag)
        cell.onEnter();
};

pro.onEnter = function () {
    if (this.activeFlag)
        return;
    this.activeFlag = true;
    for (var cellID in this.cells) {
        this.cells[cellID].onEnter();
    }
};

pro.onExit = function () {
    if (!this.activeFlag)
        return;
    this.activeFlag = false;
    for (var cellID in this.cells) {
        this.cells[cellID].onExit();
    }
};

pro.removeCell = function (cellID) {
    if (!this.activeFlag)
        return;
    this.cells[cellID].onExit();
    delete this.cells[cellID];
};

pro.canAttach = function (ent, duration, data) {
    return true;
};

pro.canDetach = function (casterID) {
    return true;
};

pro.clear = function () {
    this.cells = null;
}
