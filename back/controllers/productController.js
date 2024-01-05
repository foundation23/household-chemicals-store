const {Product} = require("../models/models");
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

class ProductController {

    async getAll(req, res) {
        let {brandId, manufacturerId, typeOfCareId, limit, page} = req.query
        let products;
        typeOfCareId = typeOfCareId || 1;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        if (brandId && manufacturerId) {
            products = await Product.findAndCountAll({where: {brandId, manufacturerId, typeOfCareId}, limit, offset})
        }
        if (!brandId && manufacturerId) {
            products = await Product.findAndCountAll({where: {manufacturerId, typeOfCareId}, limit, offset})
        }
        if (brandId && !manufacturerId) {
            products = await Product.findAndCountAll({where: {brandId, typeOfCareId}, limit, offset})
        }
        if (!brandId && !manufacturerId) {
            products = await Product.findAndCountAll({where: {typeOfCareId}, limit, offset})
        }
        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params;
        const product = await Product.findOne({where: {id}})
        return res.json(product)
    }

    async create(req, res, next) {
        try {
            const {name, sizeType, size, barcode, price, brandId, manufacturerId, description, typeOfCareId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'

            img.mv(path.resolve(__dirname, "..", 'static', fileName))

            const product = await Product.create({
                name, sizeType, size, barcode,
                price, brandId, manufacturerId,
                img: fileName, description, typeOfCareId
            })
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res) {

    }
}

module.exports = new ProductController()