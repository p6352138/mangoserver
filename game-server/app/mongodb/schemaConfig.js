/**
 * Date: 2018/6/4
 * Author: liuguolai
 * Description:
 */
var avatarSchema = _require('./schemas/avatarSchema');
var accountSchema = _require('./schemas/accountSchema');

var name2Schema = {
    "Account": accountSchema,
    "Avatar": avatarSchema
}

module.exports = name2Schema