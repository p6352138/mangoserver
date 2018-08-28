/**
 * Date: 2018/8/3
 * Author: liuguolai
 * Description: 更新配置信息
 */
var fs = require('fs');

var arguments = process.argv.splice(2);
if (arguments.length < 2)
    return;

var serverID = arguments[0];
var ip = arguments[1];

var projectPath = require.resolve('../config/mangoProject');
var projectConfig = require(projectPath);
projectConfig.serverID = parseInt(serverID);
fs.writeFileSync(projectPath, JSON.stringify(projectConfig, undefined, 2));

var serversPath = require.resolve('../config/servers');
var serversConfig = require(serversPath);
function RecursiveChangeIp(obj) {
    if (obj instanceof Array) {
        for (var childObj of obj) {
            RecursiveChangeIp(childObj);
        }
    }
    else if (obj instanceof Object) {
        if (obj.hasOwnProperty("publicHost")) {
            obj.publicHost = ip;
        }
        for (var k in obj) {
            RecursiveChangeIp(obj[k]);
        }
    }
}
RecursiveChangeIp(serversConfig);
fs.writeFileSync(serversPath, JSON.stringify(serversConfig, undefined, 2));
