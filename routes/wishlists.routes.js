const express = require('express');
const {
  listWishlists,
  createWishlist,
  getWishlist,
  updateWishlist,
  deleteWishlist,
} = require('../controllers/wishlist.controller');

const router = express.Router();

router.get('/', listWishlists);
router.post('/', createWishlist);
router.get('/:id', getWishlist);
router.put('/:id', updateWishlist);
router.delete('/:id', deleteWishlist);

module.exports = router;
