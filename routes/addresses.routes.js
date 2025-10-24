const express = require('express');
const {
  listAddresses,
  createAddress,
  getAddress,
  updateAddress,
  deleteAddress,
} = require('../controllers/address.controller');

const router = express.Router();

router.get('/', listAddresses);
router.post('/', createAddress);
router.get('/:id', getAddress);
router.put('/:id', updateAddress);
router.delete('/:id', deleteAddress);

module.exports = router;
