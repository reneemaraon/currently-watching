const Like = require('../models/like');
const Comment = require('../models/comment');
const Review = require('../models/review');

const updateReviews = async () => {
  try {
    const reviews = await Review.find();

    for (const review of reviews) {
      const comments = await Comment.find({ review: review._id });
      const likes = await Like.find({ review: review._id });

      // Update the show with new ratings and review count
      await Review.findByIdAndUpdate(
        review._id,
        {
          $set: {
            commentCount: comments.length,
            likeCount: likes.length,
          },
        },
        { new: true }
      );
    }

    console.log('Reviews recalculated successfully.');
  } catch (error) {
    console.error('Error recalculating ratings:', error);
  }
};

module.exports = updateReviews;
