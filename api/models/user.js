const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    screenName: {type: String, default: ''},
    twitterId: String,
    profilePageUrl: String,
})

const User = mongoose.model('user', userSchema);

module.exports = User;