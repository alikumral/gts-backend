const { StatusCodes } = require('http-status-codes');
const Review = require('../models/Review');

exports.listReviews = async (_req, res) => {
  try {
    const reviews = await Review.find().populate('user company');
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list reviews' });
  }
};

exports.createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(StatusCodes.CREATED).json(review);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create review', details: err.message });
  }
};

exports.getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('user company');
    if (!review) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Review not found' });
    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch review' });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    ).populate('user company');
    if (!review) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Review not found' });
    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update review', details: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Review not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete review' });
  }
};
