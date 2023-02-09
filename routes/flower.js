const express = require('express');
const router = express.Router();

const flowerController = require('../controllers/flower');
router.get('/:flowerName', flowerController.getFlower);

// const routes = require('express').Router();
// const flowers = require('../controllers/flower.js');

// routes.get('/', flowers.findAll);

// Create a new Flower
// routes.post('/', flowers.create);

// Retrieve all published Flowers

// Retrieve a single Flower with id
// routes.get('/:flower_id', flowers.findOne);

// Update a Flower with id
// routes.put('/:id', flowers.update);

// Delete a Flower with id
// routes.delete('/:id', flowers.delete);

// Create a new Flower
// routes.delete('/', flowers.deleteAll);

module.exports = router;