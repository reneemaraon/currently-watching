const Review = require('../models/review');
const { BadRequestError, NotFoundError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const getAllReviews = async (req, res) => {
  const { page = 1, limit = 20, search } = req.query;

  const searchConditions = {};
  if (search) {
    searchConditions.title = { $regex: new RegExp(search, 'i') };
  }

  const reviews = await Review.find(searchConditions)
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const count = await Review.countDocuments();

  res.status(StatusCodes.OK).json({
    nbHits: reviews.length,
    totalPages: Math.ceil(count / limit) + 1,
    currentPage: parseInt(page),
    reviews,
  });
};

const getReview = async (req, res) => {
  const {
    params: { id: reviewId },
  } = req;

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    throw new NotFoundError('Review not found');
  }
  res.status(StatusCodes.OK).json({ review });
};

const createReview = async (req, res) => {
  const { actingRating, plotRating, visualsRating } = req.body;
  const overallRating = (
    (actingRating + plotRating + visualsRating) /
    3
  ).toFixed(1);
  const review = await Review.create({
    ...req.body,
    user: req.user,
    overallRating,
  });

  res.status(StatusCodes.CREATED).json(review);
};

const deleteReview = async (req, res) => {
  const {
    params: { id: reviewId },
  } = req;
  console.log(reviewId);

  const review = await Review.findOneAndDelete({ _id: reviewId });
  if (!review) {
    throw new Error('Review not found');
  }
  res.status(StatusCodes.OK).json({ msg: 'Deleted' });
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: validate req.body before to update

    // if a new image is uploaded upload it to cloudinary
    console.log(req.body);
    const updatedReview = await Review.findByIdAndUpdate(id, {
      $set: req.body,
    });
    return res.json(updatedReview);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
};
