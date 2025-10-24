const { StatusCodes } = require('http-status-codes');
const AdsSubscription = require('../models/AdsSubscription');

exports.listAdsSubscriptions = async (_req, res) => {
  try {
    const subscriptions = await AdsSubscription.find();
    res.json(subscriptions);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list ads subscriptions' });
  }
};

exports.createAdsSubscription = async (req, res) => {
  try {
    const subscription = await AdsSubscription.create(req.body);
    res.status(StatusCodes.CREATED).json(subscription);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create ads subscription', details: err.message });
  }
};

exports.getAdsSubscription = async (req, res) => {
  try {
    const subscription = await AdsSubscription.findById(req.params.id);
    if (!subscription) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Ads subscription not found' });
    }
    res.json(subscription);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch ads subscription' });
  }
};

exports.updateAdsSubscription = async (req, res) => {
  try {
    const subscription = await AdsSubscription.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!subscription) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Ads subscription not found' });
    }
    res.json(subscription);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update ads subscription', details: err.message });
  }
};

exports.deleteAdsSubscription = async (req, res) => {
  try {
    const subscription = await AdsSubscription.findByIdAndDelete(req.params.id);
    if (!subscription) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Ads subscription not found' });
    }
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete ads subscription' });
  }
};
