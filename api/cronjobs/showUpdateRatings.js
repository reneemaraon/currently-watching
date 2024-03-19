const Show = require('../models/show');
const Review = require('../models/review');

const recalculateRatings = async () => {
  try {
    const shows = await Show.find();

    for (const show of shows) {
      const reviews = await Review.find({ show: show._id });

      let actingTotal = 0;
      let plotTotal = 0;
      let visualsTotal = 0;
      let totalAverage = 0;

      for (const review of reviews) {
        actingTotal += review.actingRating;
        plotTotal += review.plotRating;
        visualsTotal += review.visualsRating;
        totalAverage += review.overallRating;
      }

      const reviewCount = reviews.length == 0 ? 1 : reviews.length;
      const newActingAverage = (actingTotal / reviewCount).toFixed(1);
      const newPlotAverage = (plotTotal / reviewCount).toFixed(1);
      const newVisualsAverage = (visualsTotal / reviewCount).toFixed(1);
      const newTotalAverage = (totalAverage / reviewCount).toFixed(1);

      // Update the show with new ratings and review count
      await Show.findByIdAndUpdate(
        show._id,
        {
          $set: {
            actingAverage: newActingAverage,
            plotAverage: newPlotAverage,
            visualsAverage: newVisualsAverage,
            totalAverage: newTotalAverage,
            reviewCount: reviews.length,
          },
        },
        { new: true }
      );
    }

    console.log('Ratings recalculated successfully.');
  } catch (error) {
    console.error('Error recalculating ratings:', error);
  }
};

module.exports = recalculateRatings;
