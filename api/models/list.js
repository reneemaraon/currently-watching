const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: { type: String, required: true },
  ordered: { type: Boolean, default: true },
  items: [
    {
      show: { type: mongoose.SchemaTypes.ObjectId, ref: 'Show' },
      order: Number,
    },
  ],
  lastSaved: [
    {
      show: { type: mongoose.SchemaTypes.ObjectId, ref: 'Show' },
      order: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

listSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const List = mongoose.model('list', listSchema);

module.exports = List;
