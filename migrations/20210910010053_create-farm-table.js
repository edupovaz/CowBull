
exports.up = function(knex) {
  return knex.schema.createTable('farm', tbl => {
      tbl.increments('id').primary()
      tbl.string('login', 128).notNullable()
      tbl.string('password', 128).notNullable()
  })

    .createTable('fridge', tbl => {
        tbl.increments('id').primary()
        tbl.string('login', 128).notNullable()
        tbl.string('password', 128).notNullable()
    })

    .createTable('gado', tbl => {
        tbl.increments('id').primary()
        tbl.integer('num_pai').notNullable()
        tbl.integer('num_mae').notNullable()
        tbl.integer('peso').notNullable()
        tbl.string('raca').notNullable()
        tbl.string('pelagem').notNullable()
        tbl.string('sistema').notNullable()
        tbl.string('pasto').notNullable()
        tbl.integer('meses').notNullable()
        tbl.integer('fase').notNullable()
        tbl.string('vacinas').notNullable()
        tbl.date('data_nasc').notNullable()
        tbl.string('producao').notNullable()
        tbl.string('sexo').notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('farm').dropTableIfExists('fridge').dropTableIfExists('gado')
};
