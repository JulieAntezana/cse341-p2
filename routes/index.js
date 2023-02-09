const express = require('express');
const router = express.Router();
// const recipe = require('./recipe');
const flower = require('./flower');
const user = require('./user');

router.use('/', require('./swagger'));
// router.use('/recipe', recipe);
router.use('/flower', flower);
router.use('/user', user);
router.use('/user', require('./user'));
// router.use(
//   '/',
//   (docData = (req, res) => {
//     let docData = {
//       documentationURL: 'https://cse341-p2.onrender.com',
//     };
//     res.send(docData);
//   })
// );

module.exports = router;