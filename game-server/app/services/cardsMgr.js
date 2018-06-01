var cardsMgr = module.exports;

///抽卡堆
var cards = [30];
var discardCards = [0];
var ExhaustedCards = [0];


cardsMgr.init = function(){
    /// 暂代初始化算法
    for(var i=0;i<cards.length;i++)
    {
        cards[i] = i;
    }

    ///乱序
    cards = shuffle(cards);
}

///抽牌
cardsMgr.DrawPile = function()
{
    return cards.shift();
}

/// 乱序 算法，从数组末尾乱序前面的位置替换数据，以此类推。
shuffle = function(arr){
    var length = arr.length,randomIndex,temp;

    while(length)
    {
        randomIndex = Math.floor(Math.random() * (length--));
        temp = arr[randomIndex];
        arr[randomIndex] = arr[length];
        arr[length] = temp;
    }
    return arr;
}