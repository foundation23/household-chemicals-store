const {Manufacturer} = require('../models/models')

class ManufacturerController {

    async getAll(req, res) {
        const manufacturers = await Manufacturer.findAll()
        return res.json(manufacturers)
    }

    async create(req, res) {
        const {name} = req.body
        const manufacturer = await Manufacturer.create({name})
        return res.json(manufacturer)
    }

    async delete(req, res) {

    }
}

module.exports = new ManufacturerController()