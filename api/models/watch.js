const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "show",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Watch = mongoose.model("watch", watchSchema);

module.exports = Watch;
