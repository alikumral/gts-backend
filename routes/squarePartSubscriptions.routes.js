const express = require('express');
const {
  listSquarePartSubscriptions,
  createSquarePartSubscription,
  getSquarePartSubscription,
  updateSquarePartSubscription,
  deleteSquarePartSubscription,
} = require('../controllers/squarePartSubscription.controller');

const router = express.Router();

router.get('/', listSquarePartSubscriptions);
router.post('/', createSquarePartSubscription);
router.get('/:id', getSquarePartSubscription);
router.put('/:id', updateSquarePartSubscription);
router.delete('/:id', deleteSquarePartSubscription);

module.exports = router;
