var mongoose = _require('mongoose'),
    Schema = mongoose.Schema;

var AvatarSchema = new Schema({
    _id: String,
    openid: String,
    uid: Number,
    level: Number,
});

module.exports = AvatarSchema