const { StatusCodes } = require('http-status-codes');
const DirectMessage = require('../models/DirectMessage');

exports.listDirectMessages = async (_req, res) => {
  try {
    const messages = await DirectMessage.find().populate('from to');
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list direct messages' });
  }
};

exports.createDirectMessage = async (req, res) => {
  try {
    const message = await DirectMessage.create(req.body);
    res.status(StatusCodes.CREATED).json(message);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create direct message', details: err.message });
  }
};

exports.getDirectMessage = async (req, res) => {
  try {
    const message = await DirectMessage.findById(req.params.id).populate('from to');
    if (!message) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Direct message not found' });
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch direct message' });
  }
};

exports.updateDirectMessage = async (req, res) => {
  try {
    const message = await DirectMessage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    ).populate('from to');
    if (!message) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Direct message not found' });
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update direct message', details: err.message });
  }
};

exports.deleteDirectMessage = async (req, res) => {
  try {
    const message = await DirectMessage.findByIdAndDelete(req.params.id);
    if (!message) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Direct message not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete direct message' });
  }
};
