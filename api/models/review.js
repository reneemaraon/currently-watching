const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    show_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Show', // Reference to the Show model
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    plot_rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    acting_rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    visuals_rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    overall_rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;
