const express = require('express');
const { login, register, me } = require('../controllers/auth.controller');
const { requireAuth } = require('../middleware/requireAuth');
const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/me', requireAuth, me);
module.exports = router;
