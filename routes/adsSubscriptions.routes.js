const express = require('express');
const {
  listAdsSubscriptions,
  createAdsSubscription,
  getAdsSubscription,
  updateAdsSubscription,
  deleteAdsSubscription,
} = require('../controllers/adsSubscription.controller');

const router = express.Router();

router.get('/', listAdsSubscriptions);
router.post('/', createAdsSubscription);
router.get('/:id', getAdsSubscription);
router.put('/:id', updateAdsSubscription);
router.delete('/:id', deleteAdsSubscription);

module.exports = router;
