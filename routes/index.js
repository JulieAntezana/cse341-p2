const express = require('express');
const router = express.Router();
// const recipe = require('./recipe');
const flowers = require('./flowers');

router.use('/', require('./swagger'));
router.use('/flower', flowers);
router.use('/user', require('./user'));
router.use('/flower', require('./flowers'));

module.exports = router;