/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("filmes_generos", (table) => {
    table.increments("id").primary()
    

        table.integer("cliente_id")
            .unsigned()
            .references("id")
            .inTable("filmes")
            .onDelete("CASCADE")

        table.integer("genero_id")
            .unsigned()
            .references("id")
            .inTable("generos")
            .onDelete("CASCADE")


    table.date("alugado_em").notNullable
    table.date("devolvido_em")
    
    table.timestamp(true, true)
    
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
     return knex.schema.dropTable("filmes_generos")

};
