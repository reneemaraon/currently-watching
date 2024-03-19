const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show', // Reference to the Show model
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  plotRating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  actingRating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  visualsRating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  overallRating: {
    type: Number,
    min: 0,
    max: 5,
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
  commentCount: { type: Number, default: 0 },
  likeCount: { type: Number, default: 0 },
});

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;
