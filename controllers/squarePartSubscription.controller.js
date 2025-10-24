const { StatusCodes } = require('http-status-codes');
const SquarePartSubscription = require('../models/SquarePartSubscription');

exports.listSquarePartSubscriptions = async (_req, res) => {
  try {
    const subscriptions = await SquarePartSubscription.find();
    res.json(subscriptions);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list square part subscriptions' });
  }
};

exports.createSquarePartSubscription = async (req, res) => {
  try {
    const subscription = await SquarePartSubscription.create(req.body);
    res.status(StatusCodes.CREATED).json(subscription);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create square part subscription', details: err.message });
  }
};

exports.getSquarePartSubscription = async (req, res) => {
  try {
    const subscription = await SquarePartSubscription.findById(req.params.id);
    if (!subscription) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Square part subscription not found' });
    }
    res.json(subscription);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch square part subscription' });
  }
};

exports.updateSquarePartSubscription = async (req, res) => {
  try {
    const subscription = await SquarePartSubscription.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!subscription) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Square part subscription not found' });
    }
    res.json(subscription);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update square part subscription', details: err.message });
  }
};

exports.deleteSquarePartSubscription = async (req, res) => {
  try {
    const subscription = await SquarePartSubscription.findByIdAndDelete(req.params.id);
    if (!subscription) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Square part subscription not found' });
    }
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete square part subscription' });
  }
};
