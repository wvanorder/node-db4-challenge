const db = require('../data/db-config.js');

function getRecipes() {
    return db('recipes');
};

function getRecipe(id) {
    return db('recipes').where({ id });
}


function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
    .innerJoin('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
    .select('ingredients.name', 'recipe_ingredients.quantity')
    .where({ recipe_id: recipe_id })
}

function getInstructions(id) {
    return db('recipe_instructions')
    .select('recipe_instructions.step_number', 'recipe_instructions.instruction')
    .where({ recipe_id: id })
}

module.exports = {
    getRecipes,
    getRecipe,
    getShoppingList,
    getInstructions
}