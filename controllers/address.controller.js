const { StatusCodes } = require('http-status-codes');
const Address = require('../models/Address');

exports.listAddresses = async (_req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list addresses' });
  }
};

exports.createAddress = async (req, res) => {
  try {
    const address = await Address.create(req.body);
    res.status(StatusCodes.CREATED).json(address);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create address', details: err.message });
  }
};

exports.getAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Address not found' });
    res.json(address);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch address' });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!address) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Address not found' });
    res.json(address);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update address', details: err.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Address not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete address' });
  }
};
