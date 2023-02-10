const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');
router.get('/:userName', userController.getUser);

module.exports = router;