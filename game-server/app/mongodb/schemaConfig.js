/**
 * Date: 2018/6/4
 * Author: liuguolai
 * Description:
 */
var avatarSchema = require('./schemas/avatarSchema');
var accountSchema = require('./schemas/accountSchema');

var name2Schema = {
    "Account": accountSchema,
    "Avatar": avatarSchema
}

module.exports = name2Schema