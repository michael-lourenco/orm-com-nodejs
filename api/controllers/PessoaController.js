const database = require('../models');

class PessoaController{
    static async getAllPessoas(req, res){
        try{
            const pessoas = await database.Pessoas.findAll();
            return res.status(200).json(pessoas);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }
}

module.exports = PessoaController;
