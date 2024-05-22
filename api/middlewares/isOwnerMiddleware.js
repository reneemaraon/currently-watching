const Review = require("../models/review");
const { UnauthenticatedError, NotFoundError } = require("../errors");
const Comment = require("../models/comment");
const List = require("../models/list");

const isReviewOwner = async (req, res, next) => {
  const reviewId = req.params.id;
  const review = await Review.findById(reviewId);

  if (!review) {
    throw new NotFoundError("Review not found");
  }

  if (req.user && req.user._id.equals(review.user)) {
    // User is the owner of the review, proceed to the next middleware or route handler
    return next();
  } else {
    // User is not the owner of the review, send a 403 Forbidden response
    throw new UnauthenticatedError("Unauthorized access");
  }
};

const isReviewOwnerStandalone = async (user, reviewId) => {
  const review = await Review.findById(reviewId);
  return user._id.equals(review.user);
};

const isListOwnerStandalone = async (user, listId) => {
  const list = await List.findById(listId);
  return user._id.equals(list.user);
};

const isCommentOwner = async (req, res, next) => {
  const commentId = req.params.id;
  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw new NotFoundError("Comment not found");
  }
  if (req.user && req.user._id.equals(comment.user)) {
    // User is the owner of the review, proceed to the next middleware or route handler
    return next();
  } else {
    // User is not the owner of the review, send a 403 Forbidden response
    throw new UnauthenticatedError(
      "You are not authorized to modify this comment."
    );
  }
};

module.exports = {
  isListOwnerStandalone,
  isReviewOwner,
  isCommentOwner,
  isReviewOwnerStandalone,
};
