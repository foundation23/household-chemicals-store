const {Brand} = require('../models/models')

class BrandController {

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async delete(req, res) {

    }
}

module.exports = new BrandController()