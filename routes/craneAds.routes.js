const express = require('express');
const {
  listCraneAds,
  createCraneAd,
  getCraneAd,
  updateCraneAd,
  deleteCraneAd,
} = require('../controllers/craneAd.controller');

const router = express.Router();

router.get('/', listCraneAds);
router.post('/', createCraneAd);
router.get('/:id', getCraneAd);
router.put('/:id', updateCraneAd);
router.delete('/:id', deleteCraneAd);

module.exports = router;
