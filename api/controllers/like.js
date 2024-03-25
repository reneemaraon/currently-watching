const Like = require('../models/like');
const Review = require('../models/review');
const { NotFoundError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const processCreateLike = async (reviewId, userId) => {
  const existingLike = Like.find({ review: reviewId, user: userId });

  if (existingLike.length == 1) {
    return existingLike;
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

const processDeleteLike = async (reviewId, userId) => {
  const likeInstance = await Like.findOneAndDelete({
    review: reviewId,
    user: userId,
  });
  if (!likeInstance) {
    throw new Error('Like instance not found');
  }

  await removeLike(likeInstance.review);
};

const deleteLike = async (req, res) => {
  const {
    params: { id: reviewId },
    user: { _id: userId },
  } = req;

  processDeleteLike(reviewId, userId);

  res.status(StatusCodes.OK).json({ message: 'Deleted' });
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
  processDeleteLike,
};
