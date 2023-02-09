const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipe');

router.get('/:recipeName', recipeController.getRecipe);

module.exports = router;

// routes.get('/', recipes.findAll);

// // Create a new Recipe
// routes.post('/', recipes.create);

// // Retrieve all published Recipes

// // Retrieve a single Recipe with id
// routes.get('/:recipe_id', recipes.findOne);

// // Update a Recipe with id
// routes.put('/:id', recipes.update);

// // Delete a Recipe with id
// routes.delete('/:id', recipes.delete);

// // Delete all recipes
// // routes.delete('/', recipes.deleteAll);

// module.exports = routes;