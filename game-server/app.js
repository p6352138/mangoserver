var pomelo = require('pomelo');
var dispatcher = require('./app/util/dispatcher');

//route definition for chat server
var fightRoute = function(session,msg,app,cb)
{
  var fightServers = app.getServersByType('fight');

  if(!fightServers || fightServers.length == 0){
    cb(new Error('can not find fight servers.'));
    return;
  }
  var res = dispatcher.dispatch(session.get('rid'),fightServers);
  cb(null,res.id);
}
/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'mango');

// app configuration
app.configure('production|development', 'connector', function(){
  app.set('connectorConfig',
    {
      connector : pomelo.connectors.hybridconnector,
      heartbeat : 3,
      useDict : true,
      useProtobuf : true
    });
});

app.configure('production|development', 'gate', function(){
  app.set('connectorConfig',
    {
      connector : pomelo.connectors.hybridconnector,
    });
});

app.configure('production|development', function(){
  app.route('fight',fightRoute);
  //app.filter(pomelo.timeout());
});

// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});
