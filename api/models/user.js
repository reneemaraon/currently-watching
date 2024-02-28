const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  screenName: { type: String, default: '' },
  twitterId: String,
  profilePhotoUrl: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
