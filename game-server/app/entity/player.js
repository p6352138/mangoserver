
var player = module.exports;

///手牌
var cards = [0];

///抽牌
player.DrawPile = function(card)
{
    cards.push(card);
}