
const connection = require("../database/connection")
const { create } = require("./GeneroModel")

const FilmeModel = {
    async findall() {
        return await connection.raw("SELET * FROM filmes")

        
    },
    async create(filme, generos) {
        const{titulo, diretorID}= filme

        const insereFilme =await connection.raw(
            "INSERT INTO filmes (titulo,director_id) VALUES (?, ?)",
        [titulo, diretorId]
        )
        const filmeId = insereFilme.lastID
        
        if(generos && generos.length > 0) {
            for (const generoId of generos) {
                await connection.raw(
                    "INSERT INTO filmes_generos (filme_id, genero_id) VALUES (?,?)",
                    [filmeId,generoId]
                )
            }
        }
        return filmeId
    },

    async findById(id) {
        const filmeResult = await connection.raw(
            "SELECT * FROM filmes WHERE id = ?",
            [id]

        )
        const filme = filmeResult[0]

        if (! filme) return null

          const generos = await connection.raw(`
            SELECT g.id, g.nome FROM generos g 
            JOIN filmes_generos fg ON g.id = fg.genero_id
            WHERE fg.filme_id = ?

        `, [ id ] )

        return {
            ...filme,
            generos
        }
    }
    
    
}

module.exports = FilmeModel