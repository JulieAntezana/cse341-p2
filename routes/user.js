const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
router.get('/:userName', userController.getUser);

module.exports = router;