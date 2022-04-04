const database = require('../models');

class NivelController{
    static async getAll(req, res){
        try{
            const niveis = await database.Niveis.findAll();
            return res.status(200).json(niveis);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async get(req, res){
        try{
            const nivel = await database.Niveis.findOne({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(nivel);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async create(req, res){
        try{
            const nivel = await database.Niveis.create(req.body);
            return res.status(201).json(nivel);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async update(req, res){
        try{
            const nivel = await database.Niveis.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(nivel);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async delete(req, res){
        try{
            const nivel = await database.Niveis.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(nivel);
        } catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }
}

module.exports = NivelController;
