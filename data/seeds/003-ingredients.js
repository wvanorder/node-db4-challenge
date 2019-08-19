
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'lbs chicken'},
        {name: 'eggs'},
        {name: 'slices of bread'},
        {name: 'oz parmesan cheese'},
        {name: 'diced mangoes'},
        {name: 'cup of vegetables'},
        {name: 'cup of milk'},
        {name: 'cup of flour'},
        {name: 'cup of rice'},
        {name: 'stick of butter'},
        {name: 'cups of sugar'},
        {name: 'chopped carrots'},
      ]);
    });
};
