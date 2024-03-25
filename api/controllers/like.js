const Like = require("../models/like");
const Review = require("../models/review");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const processCreateLike = async (reviewId, userId) => {
  const existingReview = await Review.findOne({
    _id: reviewId,
  });

  if (!existingReview) {
    throw new NotFoundError("Review does not exist.");
  }

  const likeInstance = await Like.create({
    user: userId,
    review: reviewId,
  });

  await addLike(reviewId);

  return likeInstance;
};

const createLike = async (req, res) => {
  const {
    params: { id: reviewId },
    user: { _id: userId },
  } = req;

  const likeInstance = processCreateLike(reviewId, userId);

  res.status(StatusCodes.CREATED).json({ likeInstance });
};

const deleteLike = async (req, res) => {
  const {
    params: { id: likeId },
  } = req;

  const likeInstance = await Like.findOneAndDelete({ _id: likeId });
  if (!likeInstance) {
    throw new Error("Like instance not found");
  }

  await removeLike(likeInstance.review);

  res.status(StatusCodes.OK).json({ message: "Deleted" });
};

// utils

const updateReviewLikeCount = async (reviewId, inc) => {
  await Review.updateOne({ _id: reviewId }, { $inc: { likeCount: inc } });
};

const addLike = async (reviewId) => {
  await updateReviewLikeCount(reviewId, 1);
};

const removeLike = async (reviewId) => {
  await updateReviewLikeCount(reviewId, -1);
};

module.exports = {
  createLike,
  deleteLike,
  processCreateLike,
};
