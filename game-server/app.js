var pomelo = require('pomelo');
var dispatcher = require('./app/util/dispatcher');
var fightManger = require('./app/services/fightManger');
var mongodb = require("./app/mongodb/mongodb");

//route definition for chat server
var fightRoute = function(session,msg,app,cb)
{
  var fightServers = app.getServersByType('fight');

  if(!fightServers || fightServers.length == 0){
    cb(new Error('can not find fight servers.'));
    return;
  }

  var rid = session.get('rid');

//// 需要将rid 其实是角色 uid 强制转换成string 不然会报错
  var res = dispatcher.dispatch(String(rid),fightServers);
  cb(null,res.id);
}
/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'mango');

var initDB = function (app){
    app.loadConfig('mongodb', app.getBase() + '/config/mongodb.json');
    var db = mongodb(app);
    db.init();
    app.set('db', db, true);
}

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
    });
});

app.configure('production|development', function(){
  //fightManger.init();
  app.route('fight',fightRoute);
  //app.filter(pomelo.timeout());
    initDB(app);
});

// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});
