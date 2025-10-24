const { StatusCodes } = require('http-status-codes');
const CreditCard = require('../models/CreditCard');

exports.listCreditCards = async (_req, res) => {
  try {
    const cards = await CreditCard.find();
    res.json(cards);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list credit cards' });
  }
};

exports.createCreditCard = async (req, res) => {
  try {
    const card = await CreditCard.create(req.body);
    res.status(StatusCodes.CREATED).json(card);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create credit card', details: err.message });
  }
};

exports.getCreditCard = async (req, res) => {
  try {
    const card = await CreditCard.findById(req.params.id);
    if (!card) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Credit card not found' });
    res.json(card);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch credit card' });
  }
};

exports.updateCreditCard = async (req, res) => {
  try {
    const card = await CreditCard.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!card) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Credit card not found' });
    res.json(card);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update credit card', details: err.message });
  }
};

exports.deleteCreditCard = async (req, res) => {
  try {
    const card = await CreditCard.findByIdAndDelete(req.params.id);
    if (!card) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Credit card not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete credit card' });
  }
};
