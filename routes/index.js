const express = require('express');
const router = express.Router();
// const recipe = require('./recipe');
const flowers = require('./flowers');
const users = require('./users');

router.use('/', require('./swagger'));
// router.use('/recipe', recipe);
router.use('/flowers', flowers);
router.use('/users', users);
router.use('/user', require('./users'));
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