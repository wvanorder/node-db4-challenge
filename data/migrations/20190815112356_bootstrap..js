
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
        tbl.increments();

        tbl.string('recipe_name', 240).notNullable().unique();
  })
  .createTable('recipe_instructions', tbl => {
        tbl.increments();

        tbl
        .integer('recipe_id')
        .unsigned().notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        tbl
        .integer('step_number')
        tbl
        .string('instruction', 400)
  })
  .createTable('ingredients', tbl => {
        tbl.increments();

        tbl
            .string('name', 100)
            .unique()
            .notNullable()
  })
  .createTable('recipe_ingredients', tbl => {
        tbl.increments();

        tbl
            .integer('recipe_id')
            .unsigned().notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('ingredient_id')
            .unsigned().notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl
            .integer('quantity')
            .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_instructions')
    .dropTableIfExists('recipes')
};
