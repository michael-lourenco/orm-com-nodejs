const database = require('../models');

class PessoaController{
    static async getAll(req, res){
        try{
            const pessoas = await database.Pessoas.findAll();
            return res.status(200).json(pessoas);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async get(req, res){
        try{
            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(pessoa);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async create(req, res){
        try{
            const pessoa = await database.Pessoas.create(req.body);
            return res.status(201).json(pessoa);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async update(req, res){
        try{
            const pessoa = await database.Pessoas.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(pessoa);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async delete(req, res){
        try{
            const pessoa = await database.Pessoas.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(pessoa);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async getMatricula(req, res){
        try{
            const matricula = await database.Matriculas.findOne({
                where: {
                    id: Number(req.params.matriculaId),
                    estudante_id: Number(req.params.estudanteId)
                }
            });
            return res.status(200).json(matricula);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }
}

module.exports = PessoaController;
