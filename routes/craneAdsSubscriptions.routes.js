const express = require('express');
const {
  listCraneAdsSubscriptions,
  createCraneAdsSubscription,
  getCraneAdsSubscription,
  updateCraneAdsSubscription,
  deleteCraneAdsSubscription,
} = require('../controllers/craneAdsSubscription.controller');

const router = express.Router();

router.get('/', listCraneAdsSubscriptions);
router.post('/', createCraneAdsSubscription);
router.get('/:id', getCraneAdsSubscription);
router.put('/:id', updateCraneAdsSubscription);
router.delete('/:id', deleteCraneAdsSubscription);

module.exports = router;
