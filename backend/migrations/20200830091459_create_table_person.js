
exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', table => {
    table.increments('id').primary()
    table.string('name').notNull()
    table.string('cpf').notNull()
    table.string('celular')
    table.string('email')
    table.string('note')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('person')
};
