/**
 * Date: 2018/7/3
 * Author: liuguolai
 * Description: 卡牌管理
 */
var Component = _require('../component');
var util = _require('util');
var consts = _require('../../common/consts');
var fightHelper = _require('../../helper/fightHelper');
var cardTpl = _require('../../data/Card');
var constTpl = _require('../../data/Constant');
let CardEntity = _require('../../entity/cardEntity');
let logger = require('pomelo-logger').getLogger('game', __filename);

var CardCtrl = function (entity) {
    Component.call(this, entity);
};

util.inherits(CardCtrl, Component);
module.exports = CardCtrl;

var pro = CardCtrl.prototype;

pro.init = function (opts) {
    this.cards = [];  // 抽牌堆
    this.inHands = [];  // 手牌
    this.discards = [];  // 弃牌堆
    this.exhausts = [];  // 消耗牌堆

    this.drawTime = opts.drawTime || constTpl.BaseCardGain * 1000;  // 抽牌时间
    this.drawBlock = false;  // 抽牌阻塞，手牌满了

    this.drawTimer = null;
};

// 初始化卡牌
pro.initCards = function (cards, initialNum) {
    var [ ...newCards ] = cards;
    // 洗牌
    fightHelper.shuffle(newCards);
    this.cards = [];  // 抽牌堆
    this.inHands = [];  // 手牌

    for (var i = cards.length - 1; i >= 0; i--) {
        let cid = newCards[i];
        let cardEnt = new CardEntity(cid);  // 卡牌对象
        var cardAttri = cardEnt.config.CardAttributes;
        // 固有的
        if (initialNum > 0 && cardAttri && cardAttri.indexOf(consts.CardAttri.INHERENT_CARD) !== -1) {
            this.inHands.push(cardEnt);
            initialNum--;
        }
        else {
            this.cards.push(cardEnt);
        }
    }

    this.cards.reverse();
    while (initialNum > 0)  {
        this.inHands.push(this.cards.pop());
        initialNum --;
    }
    this.discards = [];  // 弃牌堆
    this.exhausts = [];  // 消耗牌堆
};

pro.getInHandsInfo = function () {
    let res = [];
    for (let cardEnt of this.inHands) {
        res.push(cardEnt.getClientInfo());
    }
    return res;
};

pro.stopDrawTimer = function () {
    clearTimeout(this.drawTimer);
    this.drawTimer = null;
};

// 开始抽牌逻辑
pro.startDrawTimer = function () {
    this.drawTimer = setTimeout(this._draw.bind(this), this.drawTime);
};

// 直接抽牌
pro.normalDrawCard = function (num) {
    if (num <= 0)
        return;
    for (var i = 0; i < num; i++) {
        this._draw(true);
    }
};

// 获取空余卡槽数
pro.getEmptySlotNum = function () {
    return consts.Fight.CARDS_IN_HAND_MAX - this.inHands.length;
};

// 添加手牌(不做检查)
pro.addCardToHand = function (card) {
    let cardConfig = card.config;
    // 马上使用的类型
    if (cardConfig.CardAttributes.indexOf(consts.CardAttri.GET_USE_CARD) !== -1) {
        this.useCardWhenGet(card);
        return false;
    }
    //在手中持续生效
    if (cardConfig.CardAttributes.indexOf(consts.CardAttri.GET_USE_SKILL_CARD) !== -1) {
        this.useSkillWhenGet(card);
    }
    this.inHands.push(card);
    return true;
};

// 抽牌
pro._draw = function (isDirect) {
    if (this.inHands.length >= consts.Fight.CARDS_IN_HAND_MAX) {
        this.drawBlock = true;
        return;
    }
    var card = this.cards.pop();
    let bReshuffle = false;
    // 牌库空了，重新洗牌
    if (this.cards.length === 0) {
        this._reshuffle();
        bReshuffle = true;
    }
    if (!this.addCardToHand(card)) {
        // 重新抽取，不算做抽牌次数
        return this._draw(isDirect);
    }
    var deltaData = {};  // 变化数据
    deltaData.inHands = this.getInHandsInfo();
    deltaData.cardsNum = this.cards.length;
    if (bReshuffle) {
        deltaData.discardsNum = this.discards.length;
    }
    if (!isDirect)  // 直接抽牌不走计时逻辑
        this.startDrawTimer();
    this.entity.updateFightData('onDrawCard', deltaData);
    // 通知其他玩家
    var broadcastData = {
        inHandsNum: this.inHands.length
    };
    this.entity.broadcastToOthers('onDrawCardNotify', broadcastData);
    this.emit("EventDrawCard", this.entity, card, consts.PileType.CARDS);
};

// 重新洗牌
pro._reshuffle = function (bAll) {
    var [ ...cards ] = this.discards;
    // 全部重排
    if (bAll) {
        cards = cards.concat(this.exhausts, this.inHands);
        this.exhausts = [];
        this.inHands = [];
    }
    fightHelper.shuffle(cards);
    this.cards = cards;
    this.discards = [];
};

// 使用限制检测
pro._checkUseLimit = function (useLimit) {
    for (let key in useLimit) {
        switch (key) {
            case 'wSword':
                let num = this.entity.owner.summons.getSummonsNumByType(this.entity.groupId, true, 'wSword');
                if (num < useLimit[key])
                    return false;
                break;
        }
    }
    return true;
};

pro._checkExCard = function (usedCid, exCards) {
    if (!exCards)
        return true;
    for (let cardInfo of exCards) {
        let idx = cardInfo.idx, cid = cardInfo.cid;
        if (usedCid === cid)
            return false;
        let card = this.inHands[idx];
        if (!card || card.cid !== cid)
            return false;
    }
    return true;
};

// 出牌判断
pro.checkCanUseCard = function (idx, cid, tid, exCards) {
    //this.entity.logger.debug("checkCanUseCard idx[%s] cid[%s] tid[%s]", idx, cid, tid);
    if (this.entity.state.isDead())
        return consts.FightCode.ALREADY_DEAD;
    if (this.entity.feature & consts.FeatureOpt.SKILL_FORBIT)
        return consts.FightCode.FEATURE_FORBIT;
    var card = this.inHands[idx];
    if (!card  || card.cid != cid)
        return consts.FightCode.PLAY_CARD_INFO_ERR;
    if (!this._checkExCard(exCards)) {
        return consts.FightCode.PLAY_CARD_INFO_ERR;
    }
    var cardConf = card.config;
    var needMp = card.mp;
    if (this.entity.mp < needMp)
        return consts.FightCode.MP_NOT_ENOUGH;
    var needThew = cardConf.CastThew;
    if (this.entity.thew < needThew)
        return consts.FightCode.THEW_NOT_ENOUGH;
    // 使用限制
    if (!this._checkUseLimit(cardConf.UseLimit)) {
        return consts.FightCode.USE_LIMIT;
    }
    // 技能
    var skillID = cardConf.SkillID;
    var code = this.entity.skillCtrl.canUseSkill(skillID, card.lv, tid, idx, exCards);
    if (code != consts.FightCode.OK)
        return code;
    return consts.FightCode.OK;
};

// 获取即自动使用技能
pro.useSkillWhenGet = function (card) {
    let cardConf = card.config;
    //card.onUse(this.entity);  // 卡牌内部使用处理
    /*
    let deltaData = {
        card: card.getClientInfo(),
        cardsNum: this.cards.length,
        exhaustsNum: this.exhausts.length,
        discardsNum: this.discards.length
    };
    this.entity.updateFightData('onUseSkillWhenGetCard', deltaData);
    */
    //this.emit("EventUseCard", this.entity, card);
    // 使用技能
    let exData = { cardInf:{cardCode:card.code , isGetUseSkillCard:true  } };
    var skillID = cardConf.SkillID;
    this.entity.skillCtrl.useSkill(skillID, card.lv , undefined,  exData );
    //logger.info("userSkill when get:skillId,exData",skillID, exData);
    //card.onUseFinish(this.entity);
};

// 获取即自动使用
pro.useCardWhenGet = function (card) {
    let cardConf = card.config;
    if (cardConf.CardAttributes.indexOf(consts.CardAttri.GET_USE_SKILL_CARD) !== -1) {
        this.entity.logger.error( "useCardWhenGet:GET_USE_SKILL_CARD",card.cid );
        return ;
    }
    card.onUse(this.entity);  // 卡牌内部使用处理
    if (cardConf.CardAttributes.indexOf(consts.CardAttri.PERMANENT_CONSUME_CARD) !== -1) {
        // 永久消耗，不处理
    }
    else if (cardConf.CardAttributes.indexOf(consts.CardAttri.CONSUME_CARD) !== -1) {
        // 进消耗牌堆
        this.exhausts.push(card);
    }
    else {
        // 进弃牌堆
        this.discards.push(card);
    }
    let deltaData = {
        card: card.getClientInfo(),
        cardsNum: this.cards.length,
        exhaustsNum: this.exhausts.length,
        discardsNum: this.discards.length
    };
    this.entity.updateFightData('onUseCardWhenGet', deltaData);
    var broadcastData = {
        uid: this.entity.id,
        card: card.getClientInfo(),
        tid: "",
        inHandsNum: this.inHands.length
    }
    this.entity.broadcastToOthers('onUseCardNotify', broadcastData);
    this.emit("EventUseCard", this.entity, card);
    // 使用技能
    let skillID = cardConf.SkillID, exData = {card: card};
    this.entity.skillCtrl.useSkill(skillID, card.lv, "", exData);
    card.onUseFinish(this.entity);
};

// 出牌结算
pro.actualUseCard = function (idx, cid, tid, exCards) {
    var card = this.inHands[idx];
    var cardConf = card.config;
    var needMp = card.mp;
    var needThew = cardConf.CastThew;
    this.entity.mp -= needMp;
    this.entity.thew -= needThew;
    this.inHands.splice(idx, 1);  // 删除
    card.onUse(this.entity);  // 卡牌内部使用处理
    var deltaData = {
        mp: this.entity.mp,
        thew: this.entity.thew,
        inHands: this.getInHandsInfo(),
    };
    if (cardConf.CardAttributes.indexOf(consts.CardAttri.PERMANENT_CONSUME_CARD) !== -1) {
        // 永久消耗，不处理
    }
    else if (cardConf.CardAttributes.indexOf(consts.CardAttri.CONSUME_CARD) !== -1) {
        // 进消耗牌堆
        this.exhausts.push(card);
        deltaData.exhaustsNum = this.exhausts.length;
    }
    else {
        // 进弃牌堆
        this.discards.push(card);
        deltaData.discardsNum = this.discards.length;
    }
    this.entity.updateFightData('onUseCard', deltaData);
    if (needMp > 0) {
        this.entity.startMpRecoverTimer();
    }
    var broadcastData = {
        uid: this.entity.id,
        card: card.getClientInfo(),
        tid: tid,
        inHandsNum: this.inHands.length
    }
    this.entity.broadcastToOthers('onUseCardNotify', broadcastData);
    this.emit("EventUseCard", this.entity, card);
    if (this.drawBlock) {
        this.drawBlock = false;
        this._draw();
    }
    // this.entity.logger.debug("use card cid[%s] left:", cid, this.inHands);
    // 使用技能
    let skillID = cardConf.SkillID, exData = {card: card};
    if (exCards) {  // 弃牌
        exData['exCards'] = exCards;
        exData['usedCardIdx'] = idx;
    }
    if (cardConf.CardAttributes.indexOf(consts.CardAttri.GET_USE_SKILL_CARD) !== -1) {
        this.emit("EventUseCardType7",this.entity, card.code );
        //logger.info("EventUseCardType7 emit card.code",card.code);
    }
    else{
        this.entity.skillCtrl.useSkill(skillID, card.lv, tid, exData );
    }
    card.onUseFinish(this.entity);
};

pro.hasCardInHand = function (cid) {
    for (let card of this.inHands) {
        if (card.cid === cid)
            return true;
    }
    return false;
};

pro.getInHandCidIdx = function (cid) {
    for (let i = 0; i < this.inHands.length; i++) {
        if (this.inHands[i].cid === cid)
            return i;
    }
    return -1;
};

pro.isFull = function () {
    return this.inHands.length >= consts.Fight.CARDS_IN_HAND_MAX;
};

pro._getPileByType = function (pileType) {
    if (consts.PileType.CARDS === pileType)
        return this.cards;
    if (consts.PileType.DISCARDS === pileType)
        return this.discards;
    if (consts.PileType.EXHAUSTS === pileType)
        return this.exhausts;
    if (consts.PileType.IN_HANDS === pileType)
        return this.inHands;
};

pro.getValidCardsFromPile = function (cardType, cardQuality, cardAttributes, piletype, idxFilterFunc) {
    var validCards = [];
    var isValid = function (card) {
        var cardData = card.config;
        if (cardType && cardType !== cardData.CardType)
            return false;
        if (cardQuality && cardQuality !== cardData.CardQuality)
            return false;
        if (cardAttributes && cardData.CardAttributes.indexOf(cardAttributes) === -1)
            return false;
        return true;
    }

    if (!piletype || piletype === consts.PileType.CARDS) {
        var pile = this.cards;
        for (var i in pile) {
            if (idxFilterFunc && !idxFilterFunc(i))
                continue;
            if (isValid(pile[i])) {
                validCards.push({
                    type: consts.PileType.CARDS,
                    idx: i,
                    card: pile[i],
                })
            }
        }
    }
    if (!piletype || piletype === consts.PileType.DISCARDS) {
        var pile = this.discards;
        for (var i in pile) {
            if (idxFilterFunc && !idxFilterFunc(i))
                continue;
            if (isValid(pile[i])) {
                validCards.push({
                    type: consts.PileType.DISCARDS,
                    idx: i,
                    card: pile[i],
                })
            }
        }
    }
    if (!piletype || piletype === consts.PileType.EXHAUSTS) {
        var pile = this.exhausts;
        for (var i in pile) {
            if (idxFilterFunc && !idxFilterFunc(i))
                continue;
            if (isValid(pile[i])) {
                validCards.push({
                    type: consts.PileType.EXHAUSTS,
                    idx: i,
                    card: pile[i],
                })
            }
        }
    }
    if (!piletype || piletype === consts.PileType.IN_HANDS) {
        var pile = this.inHands;
        for (var i in pile) {
            if (idxFilterFunc && !idxFilterFunc(i))
                continue;
            if (isValid(pile[i])) {
                validCards.push({
                    type: consts.PileType.IN_HANDS,
                    idx: i,
                    card: pile[i],
                })
            }
        }
    }
    return validCards;
};

// 指定抽卡
pro.specificDrawCard = function (num, cardType, cardQuality, cardAttributes, piletype) {
    if (this.isFull())
        return;
    var validCards = this.getValidCardsFromPile(cardType, cardQuality, cardAttributes, piletype);
    // 没有符合的卡牌
    if (validCards.length === 0) {
        this.entity.logger.info("specific draw card no valid. ");
        return;
    }

    var maxNum = consts.Fight.CARDS_IN_HAND_MAX - this.inHands.length;
    num = Math.min(maxNum, num);
    if (validCards.length <= num) {
        var cards = validCards;
    }
    else {
        fightHelper.shuffle(validCards);
        var cards = validCards.slice(0, num);
        cards.sort(function (a, b) {
            return a.idx - b.idx;
        })
    }
    var clientData = [];
    var broadcast = {};
    // 加入手牌
    for (var i = cards.length - 1; i >= 0; i--) {
        var info = cards[i];
        var pile = this._getPileByType(info.type);
        pile.splice(info.idx, 1);
        this.inHands.push(info.card);
        clientData.push({
            pileType: info.type,
            card: info.card,
        })
        broadcast[info.type] = (broadcast[info.type] || 0) + 1;
        this.emit("EventDrawCard", this.entity, info.card, info.type);
    }
    // to client
    this.entity.updateFightData('onSpecificDrawCard', {
        got: clientData,
        inHands: this.getInHandsInfo(),
    });
    // broadcast
    this.entity.broadcastToOthers('onSpecificDrawCardNotify', {
        targetID: this.entity.id,
        inHandsNum: this.inHands.length,
        from: broadcast,
    });
};

/* *
   * 生成卡牌
   * param pileType: 指定牌库创建
 */
pro.createCards = function (cardID, num, pileType) {
    // 手牌，有上限
    if (pileType === consts.PileType.IN_HANDS) {
        if (this.isFull())
            return;
        var maxNum = consts.Fight.CARDS_IN_HAND_MAX - this.inHands.length;
        num = Math.min(maxNum, num);
        for (var i = 0; i < num; i++) {
            this.addCardToHand(new CardEntity(cardID));
        }
    }
    else {
        let pile = this._getPileByType(pileType);
        for (var i = 0; i < num; i++) {
            pile.push(new CardEntity(cardID));
        }
    }
    let clientData = {
        num: num,
        pileType: pileType,
    }
    if (pileType === consts.PileType.IN_HANDS) {
        clientData['inHands'] = this.getInHandsInfo();
    }
    // to client
    this.entity.updateFightData('onCreateCard', clientData);
    // broadcast
    this.entity.broadcastToOthers('onCreateCardNotify', {
        uid: this.entity.id,
        num: num,
        pileType: pileType,
    });
};

// 弃手牌
pro.dropCard = function (dropIdxList, piletype) {
    var validCards = [];

    var broadcast = {};
    // 弃牌
    for (let idx of dropIdxList) {
        let card = this.inHands[idx];
        this.inHands.splice(idx, 1);
        var type = piletype;
        if (!type) {
            type = Math.floor(Math.random() * consts.PileType.MAX) + 1;
        }
        var toPile = this._getPileByType(type);
        if (type === consts.PileType.CARDS) {
            var toPileIdx = Math.floor(Math.random() * toPile.length);
            toPile.splice(toPileIdx, 0, card);
        }
        else
            toPile.push(card);
        broadcast[type] = (broadcast[type] || 0) + 1;
    }
    // to client
    this.entity.updateFightData('onDropCard', {
        toPile: piletype,
        num: dropIdxList.length,
        inHands: this.getInHandsInfo(),
    });
    // broadcast
    this.entity.broadcastToOthers('onDropCardNotify', {
        targetID: this.entity.id,
        toPile: piletype,
        num: dropIdxList.length,
        inHandsNum: this.inHands.length
    });
};

// 增加卡牌威力
pro.powerUpCard = function (pileType, cardType, upPercent, effectTimes) {
    let validCards = this.getValidCardsFromPile(cardType, null, null, pileType);
    if (validCards.length === 0) {
        this.entity.logger.info("power up card no valid. ");
        return;
    }
    let randIdx = Math.floor(Math.random() * validCards.length);
    let card = validCards[randIdx].card;
    card.addEffect(consts.CardEffect.powerUp, upPercent, effectTimes);
    // to client
    let clientData = {
        pileType: pileType
    }
    if (pileType === consts.PileType.IN_HANDS) {
        clientData.idx = validCards[randIdx].idx;
        clientData.card = card.getClientInfo();
    }
    this.entity.updateFightData('onCardPowerUp', clientData);
};

pro.getRandomCardsFromPile = function (pileType, cardType, cardQuality, cardAttributes, num) {
    let pile = this._getPileByType(pileType), cards = [], cardData;
    for (let card of pile) {
        cardData = card.config;
        if (cardType && cardType !== cardData.CardType)
            continue;
        if (cardQuality && cardQuality !== cardData.CardQuality)
            continue;
        if (cardAttributes && cardData.CardAttributes.indexOf(cardAttributes) === -1)
            continue;
        cards.push(card);
    }
    let validNum = cards.length;
    if (validNum > num) {
        fightHelper.shuffle(cards);
        return cards.slice(0, num);
    }
    else if (validNum > 0 & validNum < num) {
        // 可重复
        for (let i = validNum; i < num; i++) {
            cards.push(cards[Math.floor(Math.random() * validNum)].clone());
        }
    }
    return cards;
};

// 复制卡牌
pro.copyCards = function (cards, fromTarget, fromPileType, reduceMP, effectTimes) {
    let newCards = [];
    for (let card of cards) {
        // 不继承效果
        let newCard = card.clone();
        this.addCardToHand(newCard);
        if (reduceMP) {
            newCard.addEffect(consts.CardEffect.reduceMP, reduceMP, effectTimes);
        }
        newCards.push(newCard);
    }
    this.entity.updateFightData('onCopyCard', {
        from: fromTarget.id,
        inHands: this.getInHandsInfo(),
    });
    this.entity.broadcastToOthers('onCopyCardNotify', {
        from: fromTarget.id,
        to: this.entity.id,
        pileType: fromPileType,
        inHandsNum: this.inHands.length
    });
    this.emit("EventCopyCard", this.entity, fromTarget, newCards);
};

pro.destroy = function () {
    this.stopDrawTimer();
    Component.prototype.destroy.call(this);
};
