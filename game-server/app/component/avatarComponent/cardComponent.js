/**
 * Date: 2018/11/20
 * Author: liuhaibo
 * Description:  卡牌组件
 */
let util = require('util');
let utils = _require('../../util/utils');
let Component = _require('../component');
let consts = _require('../../common/consts');
let cardTpl = _require('../../data/Card');
let cardUpgradeTpl = _require('../../data/CardUpgrade');
let assert = require('assert');

let CardComponent = function (entity) {
    Component.call(this, entity);
};

util.inherits(CardComponent, Component);
module.exports = CardComponent;

let pro = CardComponent.prototype;

pro.init = function (opts) {
    this._initDbData(opts.card || {});
    this._dirtyCardInfo = {};
};
pro._initDbData = function (data) {
    console.log("card _initDbData:",data );
    this.cards = data.cards || {};
};
pro._newCard  = function(cnt,level=1){
    return {cnt:cnt,level:level};
}
pro.flushDirtyData = function () {
    this.entity.sendMessage('onCardsUpdate', this._dirtyCardInfo);
    this._dirtyCardInfo = {};
};
pro._addDirtyInf = function(cardId,card,bNotify){
    this._dirtyCardInfo[cardId] = card;
    if( bNotify ){
        this.flushDirtyData();
    }
}
pro.upgrade = function(data,next){
    //console.log("upgrade data:", data );
    let cardId = data.cardId ;
    let card = this.cards[cardId] ;
    assert(cardId);
    let cardInf = cardTpl[cardId] ;
    assert(cardInf);
    let CardMaxLevel = cardInf.CardMaxLevel ;
    if( CardMaxLevel === 1 ){ //该卡牌不能升级
        next(null, {code: consts.CardUpgradeCode.CARD_UNENABLE_UPGRADE });
        return ;
    }
    if( card === undefined ){ //卡数量不够
        next(null, {code: consts.CardUpgradeCode.CARD_CNT_LESS });
        return ;
    }
    if( card.level >= CardMaxLevel ){ //该卡已是最高等级了
        next(null, {code: consts.CardUpgradeCode.CARD_IS_MAX_LEVEL });
        return ;
    }

    let upgradeInf = cardUpgradeTpl[ cardInf.CardQuality ][card.level+1 ] ;
    assert(upgradeInf);
    let cnt = upgradeInf.CardNumber ;
    let silver = upgradeInf.Silver ;
    if(  card.cnt<cnt ){  //卡数量不够
        next(null, {code: consts.CardUpgradeCode.CARD_CNT_LESS });
        return ;
    }
    if( !this.entity.avatarProp.enoughSilver(silver) ){  //钱不够
        next(null, {code: consts.CardUpgradeCode.MONEY_LESS });
        return ;
    }
    //OK
    let reason = consts.SpendReason.CARD_UPGRADE_FEE ;
    card.level++;
    card.cnt-=cnt ;
    this.entity.avatarProp.spendSilver(silver,reason,true);
    //
    this._addDirtyInf(cardId,card,true);
    this.entity.logger.info('upgrade card reason[%s] id[%s] cnt[%s] newNum[%s] level[%s]', reason, cardId, cnt, card.cnt,card.level);

    next(null, {code: consts.CardUpgradeCode.OK });
};
pro.addCard = function(cardId,cnt,bNotify=true, reason='default' ){
    if( this.cards[cardId] ){
        this.cards[cardId].cnt += cnt ;
    }else{
        this.cards[cardId] = this._newCard(cnt) ;
    }
    let card = this.cards[cardId] ;
    this._addDirtyInf(cardId,card,bNotify);
    this.entity.logger.info('add card reason[%s] id[%s] cnt[%s] newNum[%s] level[%s]', reason, cardId, cnt, card.cnt,card.level);
}

/*pro.getHeroCards = function(heroId){
    let ret = {};
    return ret ;
}
pro.getCardProperties = function(cardId,level){
}*/

pro.getPersistData = function () {
    return  {cards:this.cards} ;
};
pro.getClientInfo = function () {
    return  {cards:this.cards} ;
};



