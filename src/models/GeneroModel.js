const connection = require("../database/connection")

const GeneroModel = {
    async findall() {
        const result = await connection.raw("SELET * FROM generos")

        return result
    },
    async create(data){
        const result= await connection.raw(
            "INSERT INTO generos (nome) VALUES (?)",
            [nome]
        )

        return result
    }
}

module.exports = GeneroModel