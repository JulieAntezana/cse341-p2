const express = require('express');
const router = express.Router();

const flowerController = require('../controllers/flowers');

router.get('/', flowerController.getAll);
router.post('/', flowerController.createFlower);
router.get('/:flowerName', flowerController.getFlower);
router.put('/:flowerName', flowerController.updateFlower);
router.delete('/:flowerName', flowerController.deleteFlower);

module.exports = router;
