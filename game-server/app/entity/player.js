
var player = module.exports;

///手牌
var cards = [0];
var uid;

player.init = function(uuid)
{
    this.uid = uuid;
}

///抽牌
player.DrawPile = function(card)
{
    cards.push(card);
}

///展示当前手牌
player.ShowCards = function(){
    return cards;
}

///检查手牌是否达到上限
player.CheckCards = function(num)
{
    if(cards.length < num)
        return true;
    else
        return false;
}