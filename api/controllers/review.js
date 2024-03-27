const Review = require('../models/review');
const Show = require('../models/show');
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
  const { show, actingRating, plotRating, visualsRating } = req.body;

  const existingShow = await Show.findOne({
    _id: show,
  });

  if (!existingShow) {
    throw new NotFoundError('No show given.');
  }

  const existingReview = await Review.findOne({
    user: req.user._id,
    show,
  });

  if (existingReview) {
    throw new BadRequestError('You have already posted a review for this show');
  }

  const overallRating = (
    (actingRating + plotRating + visualsRating) /
    3
  ).toFixed(1);
  const review = await Review.create({
    ...req.body,
    user: req.user._id,
    overallRating,
  });

  await recalculateRatings(review);

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

  await recalculateRatings(review, false);
  res.status(StatusCodes.OK).json({ message: 'Deleted' });
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

const recalculateRatings = async (review, isAddition = true) => {
  const {
    show: showId,
    actingRating: newActingRating,
    plotRating: newPlotRating,
    visualsRating: newVisualsRating,
    overallRating: newOverallRating,
  } = review;

  // Fetch the existing show
  const existingShow = await Show.findById(showId);

  if (!existingShow) {
    throw new Error('Show not found');
  }

  const {
    actingAverage,
    plotAverage,
    visualsAverage,
    reviewCount,
    totalAverage,
  } = existingShow;

  // Determine whether to add or subtract from review count
  const adjustment = isAddition ? 1 : -1;

  // Calculate review count new
  const newReviewCount = reviewCount + adjustment;

  // Calculate new average ratings
  const newAverageActing = (
    (actingAverage * reviewCount + newActingRating * adjustment) /
    newReviewCount
  ).toFixed(1);
  const newAveragePlot = (
    (plotAverage * reviewCount + newPlotRating * adjustment) /
    newReviewCount
  ).toFixed(1);
  const newAverageVisuals = (
    (visualsAverage * reviewCount + newVisualsRating * adjustment) /
    newReviewCount
  ).toFixed(1);

  // Calculate the new total average rating
  const newTotalAverage = (
    (totalAverage * reviewCount + newOverallRating * adjustment) /
    newReviewCount
  ).toFixed(1);

  // Update the Show model with the new ratings
  await Show.findByIdAndUpdate(
    showId,
    {
      $set: {
        actingAverage: newAverageActing,
        plotAverage: newAveragePlot,
        visualsAverage: newAverageVisuals,
        totalAverage: newTotalAverage,
        reviewCount: newReviewCount,
      },
    },
    { new: true }
  );
};

module.exports = {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
};
