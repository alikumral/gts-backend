const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');

const populatePaths = [
  'addresses',
  'billingAddress',
  'craneSellSubscription',
  'adsSubscription',
  'squarePartSubscription',
  'company',
  'craneAds',
  'followers',
  'following',
  'creditCards',
  'reviews',
  'wishlist',
  'directMessages',
];

exports.listUsers = async (_req, res) => {
  try {
    const users = await User.find().populate(populatePaths);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list users' });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(populatePaths);
    if (!user) return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch user' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    ).populate(populatePaths);
    if (!user) return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update user', details: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete user' });
  }
};
