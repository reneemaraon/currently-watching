const Comment = require("../models/comment");
const Review = require("../models/review");
const User = require("../models/user");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const getAllComments = async (req, res) => {
  const {
    params: { id: reviewId },
  } = req;

  const { page = 1, limit = 20 } = req.query;

  const comments = await Comment.find({ review: reviewId })
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const count = await Comment.countDocuments();

  res.status(StatusCodes.OK).json({
    totalCount: comments.length,
    totalPages: Math.ceil(count / limit) + 1,
    currentPage: parseInt(page),
    comments,
  });
};

const processCreateComment = async (reviewId, userId, commentBody) => {
  const existingReview = await Review.findOne({
    _id: reviewId,
  });

  if (!existingReview) {
    throw new NotFoundError("Review does not exist.");
  }

  const comment = await Comment.create({
    commentBody,
    user: userId,
    review: reviewId,
  });

  await addComment(reviewId);

  return comment;
};

const createComment = async (req, res) => {
  const {
    params: { id: reviewId },
    user: { _id: userId },
  } = req;
  const { commentBody } = req.body;

  const comment = await processCreateComment(reviewId, userId, commentBody);

  res.status(StatusCodes.CREATED).json({ comment });
};

const deleteComment = async (req, res) => {
  const {
    params: { id: commentId },
  } = req;

  const comment = await Comment.findOneAndDelete({ _id: commentId });
  if (!comment) {
    throw new Error("Comment not found");
  }

  await removeComment(comment.review);

  res.status(StatusCodes.OK).json({ message: "Deleted" });
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedComment = await Comment.findByIdAndUpdate(id, {
      $set: req.body,
    });
    return res.json(updatedComment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// utils

const updateReviewCommentCount = async (reviewId, inc) => {
  await Review.updateOne({ _id: reviewId }, { $inc: { commentCount: inc } });
};

const addComment = async (reviewId) => {
  await updateReviewCommentCount(reviewId, 1);
};

const removeComment = async (reviewId) => {
  await updateReviewCommentCount(reviewId, -1);
};

module.exports = {
  createComment,
  getAllComments,
  updateComment,
  deleteComment,
  processCreateComment,
};
