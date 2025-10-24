const express = require('express');
const {
  listCreditCards,
  createCreditCard,
  getCreditCard,
  updateCreditCard,
  deleteCreditCard,
} = require('../controllers/creditCard.controller');

const router = express.Router();

router.get('/', listCreditCards);
router.post('/', createCreditCard);
router.get('/:id', getCreditCard);
router.put('/:id', updateCreditCard);
router.delete('/:id', deleteCreditCard);

module.exports = router;
