var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AvatarSchema = new Schema({
    _id: String,
    openid: String,
    uid: Number,
    level: Number,
    name: String,
    gender: Number,
    avatarUrl: String,
    ladder: {},
    raid: {}
});

AvatarSchema.set('toObject', { getters: true });

module.exports = AvatarSchema;