const express = require('express');
const {
  listCraneBrands,
  createCraneBrand,
  getCraneBrand,
  updateCraneBrand,
  deleteCraneBrand,
} = require('../controllers/craneBrand.controller');

const router = express.Router();

router.get('/', listCraneBrands);
router.post('/', createCraneBrand);
router.get('/:id', getCraneBrand);
router.put('/:id', updateCraneBrand);
router.delete('/:id', deleteCraneBrand);

module.exports = router;
