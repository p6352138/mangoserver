var reload = require('./app/util/require');

var pomelo = require('pomelo');
var mongodb = _require("./app/mongodb/mongodb");
var RollStub = _require('./app/services/rollStub');
var MatchStub = _require('./app/services/matchStub');
var routeUtil = _require('./app/util/routeUtil');
var dungeonFilter = _require('./app/servers/fight/filter/dungeonFilter');
var consts = require('./app/common/consts');

/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'mango');
app.set('reload', reload, true);

var initDB = function (app){
    app.loadConfig('mongodb', app.getBase() + '/config/mongodb.json');
    var db = mongodb(app);
    db.init();
    app.set('db', db, true);
};

// app configuration
app.configure('production|development', 'connector', function(){
  app.set('connectorConfig',
    {
      connector : pomelo.connectors.hybridconnector,
      heartbeat : 10,
      useDict:true,
      useProtobuf:true,
      handshake : function(msg,cb){
        cb(null,{});
      }
    });
});

app.configure('production|development', 'gate', function(){
    app.set('connectorConfig',
        {
            connector : pomelo.connectors.hybridconnector,
            useDict:true,
            useProtobuf:true,
        });
});

app.configure('production|development', 'fight', function(){
    app.before(dungeonFilter());
});

app.configure('production|development', function(){
    app.enable('systemMonitor');
    if (typeof app.registerAdmin === 'function') {
        var onlineUser = require('./app/modules/onlineUser');
        app.registerAdmin(onlineUser, {app: app});
    }

    app.loadConfig('mangoConfig', app.getBase() + '/config/mangoProject.json');
    app.route('fight', routeUtil.fight);
    //app.filter(pomelo.timeout());
    initDB(app);
    // app.set('pushSchedulerConfig', {scheduler: pomelo.pushSchedulers.buffer, flushInterval: 20});
    if (app.serverType !== 'master') {
        // 战斗服配置
        var fights = app.get('servers').fight;
        var fightIdsMap = {};
        for (var id in fights) {
            var fight = fights[id].fight;
            if (!fightIdsMap.hasOwnProperty(fight)) {
                fightIdsMap[fight] = [];
            }
            fightIdsMap[fight].push(fights[id].id);
        }
        app.set('fightIdsMap', fightIdsMap);
    }

    // handler 热更新开关
    app.set('serverConfig',
        {
            reloadHandlers: false
        });

    // remote 热更新开关
    app.set('remoteConfig',
        {
            reloadRemotes: false
        });
});

app.configure('production|development', 'auth', function(){
    app.set('rollStub', RollStub(app));
});

app.configure('production|development', 'match', function () {
    var initMatchTypes = [consts.MatchType.PVE_2, consts.MatchType.PVE_3, consts.MatchType.PVP];
    app.matchStubs = {};
    for (var matchType of initMatchTypes) {
        app.matchStubs[matchType] = new MatchStub({matchType: matchType})
    }
    // var server = app.getCurServer();
    // if (server.pvp) {
    //     console.log("xxxxxxxxxxxxxxxx", "pvp", app.get('env'));
    //     app.matchStub = MatchStub({matchType: server.match, pvp: true})
    // }
    // else {
    //     console.log("xxxxxxxxxxxxxx", "pve", server.num);
    //     app.matchStub = MatchStub({matchType: server.match, num: server.num})
    // }
});

// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});
