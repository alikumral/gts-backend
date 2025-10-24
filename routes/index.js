const express = require('express');
const authRoutes = require('./auth.routes');
const userRoutes = require('./users.routes');
const addressRoutes = require('./addresses.routes');
const creditCardRoutes = require('./creditCards.routes');
const companyRoutes = require('./companies.routes');
const reviewRoutes = require('./reviews.routes');
const wishlistRoutes = require('./wishlists.routes');
const craneAdRoutes = require('./craneAds.routes');
const craneBrandRoutes = require('./craneBrands.routes');
const craneTypeRoutes = require('./craneTypes.routes');
const craneModelRoutes = require('./craneModels.routes');
const craneAdsSubscriptionRoutes = require('./craneAdsSubscriptions.routes');
const adsSubscriptionRoutes = require('./adsSubscriptions.routes');
const squarePartSubscriptionRoutes = require('./squarePartSubscriptions.routes');
const directMessageRoutes = require('./directMessages.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/addresses', addressRoutes);
router.use('/credit-cards', creditCardRoutes);
router.use('/companies', companyRoutes);
router.use('/reviews', reviewRoutes);
router.use('/wishlists', wishlistRoutes);
router.use('/crane-ads', craneAdRoutes);
router.use('/crane-brands', craneBrandRoutes);
router.use('/crane-types', craneTypeRoutes);
router.use('/crane-models', craneModelRoutes);
router.use('/crane-ads-subscriptions', craneAdsSubscriptionRoutes);
router.use('/ads-subscriptions', adsSubscriptionRoutes);
router.use('/square-part-subscriptions', squarePartSubscriptionRoutes);
router.use('/direct-messages', directMessageRoutes);

module.exports = router;
