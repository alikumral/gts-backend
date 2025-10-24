const { StatusCodes } = require('http-status-codes');
const CraneModel = require('../models/CraneModel');

const populatePaths = 'brand type';

exports.listCraneModels = async (_req, res) => {
  try {
    const models = await CraneModel.find().populate(populatePaths);
    res.json(models);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list crane models' });
  }
};

exports.createCraneModel = async (req, res) => {
  try {
    const model = await CraneModel.create(req.body);
    res.status(StatusCodes.CREATED).json(model);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create crane model', details: err.message });
  }
};

exports.getCraneModel = async (req, res) => {
  try {
    const model = await CraneModel.findById(req.params.id).populate(populatePaths);
    if (!model) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane model not found' });
    res.json(model);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch crane model' });
  }
};

exports.updateCraneModel = async (req, res) => {
  try {
    const model = await CraneModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    ).populate(populatePaths);
    if (!model) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane model not found' });
    res.json(model);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update crane model', details: err.message });
  }
};

exports.deleteCraneModel = async (req, res) => {
  try {
    const model = await CraneModel.findByIdAndDelete(req.params.id);
    if (!model) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane model not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete crane model' });
  }
};
