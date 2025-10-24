const express = require('express');
const {
  listDirectMessages,
  createDirectMessage,
  getDirectMessage,
  updateDirectMessage,
  deleteDirectMessage,
} = require('../controllers/directMessage.controller');

const router = express.Router();

router.get('/', listDirectMessages);
router.post('/', createDirectMessage);
router.get('/:id', getDirectMessage);
router.put('/:id', updateDirectMessage);
router.delete('/:id', deleteDirectMessage);

module.exports = router;
