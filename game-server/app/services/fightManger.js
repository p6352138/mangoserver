var cardsMgr = require('cardsMgr');
var player = require('../entity/player');
var pomelo = require('pomelo');

var fightManger = module.exports;

fightManger.init = function(){
    cardsMgr.init();

    for(var i=0;i<5;i++)
    {
        player.DrawPile(cardsMgr.DrawPile());
    }

    setInterval(checkPile,5000);
}

fightManger.exit = function(){
    clearInterval();
}
/// 五秒发牌
checkPile = function()
{

}


