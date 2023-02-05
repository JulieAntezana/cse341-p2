const routes = require('express').Router();
const recipes = require('../controllers/recipe.js');

routes.get('/', recipes.findAll);

// Create a new Recipe
routes.post('/', recipes.create);

// Retrieve all published Recipes

// Retrieve a single Recipe with id
routes.get('/:recipe_id', recipes.findOne);

// Update a Recipe with id
// routes.put('/:id', recipes.update);

// Delete a Recipe with id
// routes.delete('/:id', recipes.delete);

// Create a new Recipe
// routes.delete('/', recipes.deleteAll);

module.exports = routes;