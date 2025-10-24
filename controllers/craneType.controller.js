const { StatusCodes } = require('http-status-codes');
const CraneType = require('../models/CraneType');

exports.listCraneTypes = async (_req, res) => {
  try {
    const types = await CraneType.find();
    res.json(types);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list crane types' });
  }
};

exports.createCraneType = async (req, res) => {
  try {
    const type = await CraneType.create(req.body);
    res.status(StatusCodes.CREATED).json(type);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create crane type', details: err.message });
  }
};

exports.getCraneType = async (req, res) => {
  try {
    const type = await CraneType.findById(req.params.id);
    if (!type) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane type not found' });
    res.json(type);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch crane type' });
  }
};

exports.updateCraneType = async (req, res) => {
  try {
    const type = await CraneType.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!type) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane type not found' });
    res.json(type);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update crane type', details: err.message });
  }
};

exports.deleteCraneType = async (req, res) => {
  try {
    const type = await CraneType.findByIdAndDelete(req.params.id);
    if (!type) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane type not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete crane type' });
  }
};
