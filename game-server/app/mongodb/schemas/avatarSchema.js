var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    /*
    var AvatarSchema = function()
    {
        var AvatarSchema =  new Schema({
            _id: String,
            name: String
        });
        return AvatarSchema;
    }
*/
var AvatarSchema =  new Schema({
    _id: String,
    name: String
});

module.exports = AvatarSchema;