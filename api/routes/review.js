const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authMiddleware');
const { isReviewOwner } = require('../middlewares/isOwnerMiddleware');

const {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
} = require('../controllers/review');

router.route('/').get(getAllReviews);

router.route('/').post(authenticate, createReview);

router
  .route('/:id')
  .get(getReview)
  .patch(authenticate, isReviewOwner, updateReview)
  .delete(authenticate, isReviewOwner, deleteReview);

module.exports = router;
