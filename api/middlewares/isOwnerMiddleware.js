const Review = require('../models/review');
const {
  UnauthenticatedError,
  BadRequestError,
  NotFoundError,
} = require('../errors');
const Comment = require('../models/comment');

const isReviewOwner = async (req, res, next) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId);

    if (!review) {
      throw new NotFoundError('Review not found');
    }

    if (req.user && req.user._id.equals(review.user_id)) {
      // User is the owner of the review, proceed to the next middleware or route handler
      return next();
    } else {
      // User is not the owner of the review, send a 403 Forbidden response
      throw new UnauthenticatedError('Unauthorized access');
    }
  } catch (error) {
    throw new BadRequestError('Internal server error');
  }
};

const isCommentOwner = async (req, res, next) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);

    if (!comment) {
      throw new NotFoundError('Comment not found');
    }

    if (req.user && req.user._id.equals(review.user_id)) {
      // User is the owner of the review, proceed to the next middleware or route handler
      return next();
    } else {
      // User is not the owner of the review, send a 403 Forbidden response
      throw new UnauthenticatedError('Unauthorized access');
    }
  } catch (error) {
    throw new BadRequestError('Internal server error');
  }
};

module.exports = { isReviewOwner, isCommentOwner };
