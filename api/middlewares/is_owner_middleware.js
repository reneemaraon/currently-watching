const Review = require("../models/review");

const isReviewOwner = async (req, res, next) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    if (req.user && req.user._id.equals(review.user_id)) {
      // User is the owner of the review, proceed to the next middleware or route handler
      return next();
    } else {
      // User is not the owner of the review, send a 403 Forbidden response
      return res.status(403).json({ message: "Unauthorized access" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { isReviewOwner };
