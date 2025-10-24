const express = require('express');
const {
  listReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} = require('../controllers/review.controller');

const router = express.Router();

router.get('/', listReviews);
router.post('/', createReview);
router.get('/:id', getReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;
