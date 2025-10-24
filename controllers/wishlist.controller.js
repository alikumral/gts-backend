const { StatusCodes } = require('http-status-codes');
const Wishlist = require('../models/Wishlist');

exports.listWishlists = async (_req, res) => {
  try {
    const wishlists = await Wishlist.find().populate('user company craneAd');
    res.json(wishlists);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list wishlists' });
  }
};

exports.createWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.create(req.body);
    res.status(StatusCodes.CREATED).json(wishlist);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create wishlist', details: err.message });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id).populate('user company craneAd');
    if (!wishlist) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Wishlist not found' });
    res.json(wishlist);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch wishlist' });
  }
};

exports.updateWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    ).populate('user company craneAd');
    if (!wishlist) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Wishlist not found' });
    res.json(wishlist);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update wishlist', details: err.message });
  }
};

exports.deleteWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findByIdAndDelete(req.params.id);
    if (!wishlist) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Wishlist not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete wishlist' });
  }
};
