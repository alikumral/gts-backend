const { StatusCodes } = require('http-status-codes');
const CraneAdsSubscription = require('../models/CraneAdsSubscription');

exports.listCraneAdsSubscriptions = async (_req, res) => {
  try {
    const subscriptions = await CraneAdsSubscription.find();
    res.json(subscriptions);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list crane ads subscriptions' });
  }
};

exports.createCraneAdsSubscription = async (req, res) => {
  try {
    const subscription = await CraneAdsSubscription.create(req.body);
    res.status(StatusCodes.CREATED).json(subscription);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create crane ads subscription', details: err.message });
  }
};

exports.getCraneAdsSubscription = async (req, res) => {
  try {
    const subscription = await CraneAdsSubscription.findById(req.params.id);
    if (!subscription) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane ads subscription not found' });
    }
    res.json(subscription);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch crane ads subscription' });
  }
};

exports.updateCraneAdsSubscription = async (req, res) => {
  try {
    const subscription = await CraneAdsSubscription.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!subscription) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane ads subscription not found' });
    }
    res.json(subscription);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update crane ads subscription', details: err.message });
  }
};

exports.deleteCraneAdsSubscription = async (req, res) => {
  try {
    const subscription = await CraneAdsSubscription.findByIdAndDelete(req.params.id);
    if (!subscription) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane ads subscription not found' });
    }
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete crane ads subscription' });
  }
};
