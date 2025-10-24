const express = require('express');
const {
  listCraneModels,
  createCraneModel,
  getCraneModel,
  updateCraneModel,
  deleteCraneModel,
} = require('../controllers/craneModel.controller');

const router = express.Router();

router.get('/', listCraneModels);
router.post('/', createCraneModel);
router.get('/:id', getCraneModel);
router.put('/:id', updateCraneModel);
router.delete('/:id', deleteCraneModel);

module.exports = router;
