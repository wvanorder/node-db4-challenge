const express = require('express');
const recipeModel = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    recipeModel.getRecipes().then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'internal server error' })
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    recipeModel.getRecipe(id)
        .then(recipe => {
            if(recipe) {
                res.json(recipe)
            } else {
                res.status(404).json({ message: 'recipe does not exist' })
            }
        })
})

router.get('/:id/ingredients', (req, res) => {
    const id = req.params.id;

    const recipe = recipeModel.getRecipe(id)

    recipeModel.getShoppingList(id)
    .then(ingredients => {
        if(recipe) {
            res.status(200).json({recipe: recipe.name, ingredients: ingredients})
        } else {
            res.status(404).json({ message: 'recipe does not exist' })
        }
    })
})

router.get('/:id/instructions', (req, res) => {
    const id = req.params.id;

    recipeModel.getInstructions(id)
    .then(instructions => {
        if(instructions) {
            res.status(200).json(instructions)
        } else {
            res.status(404).json({ message: 'recipe does not exist' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'internal server error' })
    })
})

module.exports = router;