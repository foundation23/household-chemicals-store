    const {TypeOfCare} = require('../models/models')

class TypeCareController {

    async getAll(req, res) {
        const types = await TypeOfCare.findAll()
        return res.json(types)
    }

    async create(req, res) {
        const {name} = req.body
        const typeCare = await TypeOfCare.create({name})
        return res.json(typeCare)
    }

    async delete(req, res) {

    }
}

module.exports = new TypeCareController()