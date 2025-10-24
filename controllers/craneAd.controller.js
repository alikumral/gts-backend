const { StatusCodes } = require('http-status-codes');
const CraneAd = require('../models/CraneAd');

const populatePaths = 'owner company brand type model address';

exports.listCraneAds = async (_req, res) => {
  try {
    const craneAds = await CraneAd.find().populate(populatePaths);
    res.json(craneAds);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list crane ads' });
  }
};

exports.createCraneAd = async (req, res) => {
  try {
    const craneAd = await CraneAd.create(req.body);
    res.status(StatusCodes.CREATED).json(craneAd);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create crane ad', details: err.message });
  }
};

exports.getCraneAd = async (req, res) => {
  try {
    const craneAd = await CraneAd.findById(req.params.id).populate(populatePaths);
    if (!craneAd) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane ad not found' });
    res.json(craneAd);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch crane ad' });
  }
};

exports.updateCraneAd = async (req, res) => {
  try {
    const craneAd = await CraneAd.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    ).populate(populatePaths);
    if (!craneAd) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane ad not found' });
    res.json(craneAd);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update crane ad', details: err.message });
  }
};

exports.deleteCraneAd = async (req, res) => {
  try {
    const craneAd = await CraneAd.findByIdAndDelete(req.params.id);
    if (!craneAd) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane ad not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete crane ad' });
  }
};
