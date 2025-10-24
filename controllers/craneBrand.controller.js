const { StatusCodes } = require('http-status-codes');
const CraneBrand = require('../models/CraneBrand');

exports.listCraneBrands = async (_req, res) => {
  try {
    const brands = await CraneBrand.find();
    res.json(brands);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list crane brands' });
  }
};

exports.createCraneBrand = async (req, res) => {
  try {
    const brand = await CraneBrand.create(req.body);
    res.status(StatusCodes.CREATED).json(brand);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create crane brand', details: err.message });
  }
};

exports.getCraneBrand = async (req, res) => {
  try {
    const brand = await CraneBrand.findById(req.params.id);
    if (!brand) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane brand not found' });
    res.json(brand);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch crane brand' });
  }
};

exports.updateCraneBrand = async (req, res) => {
  try {
    const brand = await CraneBrand.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!brand) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane brand not found' });
    res.json(brand);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update crane brand', details: err.message });
  }
};

exports.deleteCraneBrand = async (req, res) => {
  try {
    const brand = await CraneBrand.findByIdAndDelete(req.params.id);
    if (!brand) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Crane brand not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete crane brand' });
  }
};
