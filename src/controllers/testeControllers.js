const connection =require("../database/connection")

const testConnection = async (req,res ) => {
    try {
       await connection.raw("SELECT 1+1 as result")
     
       
        return res.send({ menssage:"BANCO conectado com sucesso"})

    } catch(error){ 
        return res.status(500).json({message:"Error ao conectar ao Banco :(",
            error:error
        })
    }
}
 module.exports ={
    testConnection
 }