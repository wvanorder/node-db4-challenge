
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {recipe_id: 1,
          step_number: 1,
          instruction: 'make the batter'
        },
         {recipe_id: 1,
          step_number: 2,
          instruction: 'bake the cake'
        },
        {recipe_id: 1,
          step_number: 3,
          instruction: 'EAT THE CAKE'
        },
         {recipe_id: 2,
          step_number: 1,
          instruction: 'kill the chicken'
        },
        {recipe_id: 2,
          step_number: 2,
          instruction: 'throw some parm on there, cook it, and eat it'
        },
         {recipe_id: 3,
          step_number: 1,
          instruction: 'dice mangos'
        },
        {recipe_id: 3,
          step_number: 2,
          instruction: 'stir over medium heat for 15 minutes'
        },
         {recipe_id: 3,
          step_number: 3,
          instruction: 'add vegetables as desired'
        },
        {recipe_id: 4,
          step_number: 1,
          instruction: 'toast the bread'
        },
         {recipe_id: 4,
          step_number: 2,
          instruction: 'butter your toast'
        },
      ]);
    });
};
