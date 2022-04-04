const database = require('../models');

class TurmaController{
    static async getAll(req, res){
        try{
            const turmas = await database.Turmas.findAll();
            return res.status(200).json(turmas);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async get(req, res){
        try{
            const turma = await database.Turmas.findOne({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(turma);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async create(req, res){
        try{
            const turma = await database.Turmas.create(req.body);
            return res.status(201).json(turma);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async update(req, res){
        try{
            const turma = await database.Turmas.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(turma);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async delete(req, res){
        try{
            const turma = await database.Turmas.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(turma);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }
}

module.exports = TurmaController;
