const express = require('express');
const {
  listCraneTypes,
  createCraneType,
  getCraneType,
  updateCraneType,
  deleteCraneType,
} = require('../controllers/craneType.controller');

const router = express.Router();

router.get('/', listCraneTypes);
router.post('/', createCraneType);
router.get('/:id', getCraneType);
router.put('/:id', updateCraneType);
router.delete('/:id', deleteCraneType);

module.exports = router;
