const Review = require("../models/review");
const Show = require("../models/show");
const { BadRequestError, NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const getAllReviews = async (req, res) => {
  const { page = 1, limit = 20, search } = req.query;

  const searchConditions = {};
  if (search) {
    searchConditions.title = { $regex: new RegExp(search, "i") };
  }

  const reviews = await Review.find(searchConditions)
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const count = await Review.countDocuments();

  res.status(StatusCodes.OK).json({
    totalCount: reviews.length,
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
    throw new NotFoundError("Review not found");
  }
  res.status(StatusCodes.OK).json({ review });
};

const createReview = async (req, res) => {
  const { show, actingRating, plotRating, visualsRating } = req.body;

  const existingShow = await Show.findOne({
    _id: show,
  });

  if (!existingShow) {
    throw new NotFoundError("No show given.");
  }

  const existingReview = await Review.findOne({
    user: req.user._id,
    show,
  });

  if (existingReview) {
    throw new BadRequestError("You have already posted a review for this show");
  }

  const overallRating = (actingRating + plotRating + visualsRating) / 3;
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

  const review = await Review.findOneAndDelete({ _id: reviewId });
  if (!review) {
    throw new Error("Review not found");
  }

  await recalculateRatings(review, false);
  res.status(StatusCodes.OK).json({ message: "Deleted" });
};

const processUpdateReview = async (id, body) => {
  const includesRatingChange =
    body.actingRating || body.plotRating || body.visualsRating;

  const payload = body;

  if (includesRatingChange) {
    const review = await Review.findById(id);
    await recalculateRatings(review, false);
    const toUpdate = {
      actingRating: review.actingRating,
      visualsRating: review.visualsRating,
      plotRating: review.plotRating,
      ...body,
    };
    const { actingRating, plotRating, visualsRating } = toUpdate;
    payload.overallRating = (actingRating + plotRating + visualsRating) / 3;
  }
  const updatedReview = await Review.findByIdAndUpdate(id, {
    $set: payload,
  });

  if (includesRatingChange) {
    const review = await Review.findById(id);
    await recalculateRatings(review, true);
    console.log("here");
    console.log(review);
  }
  return updatedReview;
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReview = processUpdateReview(id, req.body);

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
    throw new Error("Show not found");
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
  const newCount = reviewCount + adjustment;

  const newReviewCount = newCount == 0 ? 1 : newCount;

  // Calculate new average ratings
  const newAverageActing =
    (actingAverage * reviewCount + newActingRating * adjustment) /
    newReviewCount;
  const newAveragePlot =
    (plotAverage * reviewCount + newPlotRating * adjustment) / newReviewCount;
  const newAverageVisuals =
    (visualsAverage * reviewCount + newVisualsRating * adjustment) /
    newReviewCount;

  // Calculate the new total average rating
  const newTotalAverage =
    (totalAverage * reviewCount + newOverallRating * adjustment) /
    newReviewCount;

  // Update the Show model with the new ratings
  const show = await Show.findByIdAndUpdate(
    showId,
    {
      $set: {
        actingAverage: newAverageActing,
        plotAverage: newAveragePlot,
        visualsAverage: newAverageVisuals,
        totalAverage: newTotalAverage,
        reviewCount: newCount,
      },
    },
    { new: true }
  );

  show.save();
};

module.exports = {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
  processUpdateReview,
};
