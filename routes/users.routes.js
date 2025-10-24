const express = require('express');
const {
  listUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const router = express.Router();

router.get('/', listUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
