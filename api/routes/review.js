const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authMiddleware');
const {
  isReviewOwner,
  isCommentOwner,
} = require('../middlewares/isOwnerMiddleware');

const {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
} = require('../controllers/review');

const {
  createComment,
  getAllComments,
  updateComment,
  deleteComment,
} = require('../controllers/comment');

router.route('/').get(getAllReviews);

router.route('/').post(authenticate, createReview);

router
  .route('/:id')
  .get(getReview)
  .patch(authenticate, isReviewOwner, updateReview)
  .delete(authenticate, isReviewOwner, deleteReview);

router
  .route('/:id/comments')
  .get(getAllComments)
  .post(authenticate, createComment);

router
  .route('/:reviewId/comments/:id')
  .patch(authenticate, isCommentOwner, updateComment)
  .delete(authenticate, isCommentOwner, deleteComment);
module.exports = router;
