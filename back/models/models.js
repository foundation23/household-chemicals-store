const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CartProduct = sequelize.define('cart_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    sizeType: {type: DataTypes.STRING},
    size: {type: DataTypes.INTEGER},
    description: {type: DataTypes.STRING(1000)},
    barcode: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})

const TypeOfCare = sequelize.define('type_of_care', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Manufacturer = sequelize.define('manufacturer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const TypeOfCareManufacturer = sequelize.define('type_of_careManufacturer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BrandManufacturer = sequelize.define('brandManufacturer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const TypeOfCareBrand = sequelize.define('type_of_careBrand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(CartProduct)
CartProduct.belongsTo(Cart)

Brand.hasMany(Product)
Product.belongsTo(Brand)

TypeOfCare.hasMany(Product)
Product.belongsTo(TypeOfCare)

Manufacturer.hasMany(Product)
Product.belongsTo(Manufacturer)

TypeOfCare.belongsToMany(Manufacturer, {through: TypeOfCareManufacturer})
Manufacturer.belongsToMany(TypeOfCare, {through: TypeOfCareManufacturer})

Brand.belongsToMany(TypeOfCare, {through: TypeOfCareBrand})
TypeOfCare.belongsToMany(Brand, {through: TypeOfCareBrand})

Brand.belongsToMany(Manufacturer, {through: BrandManufacturer})
Manufacturer.belongsToMany(Brand, {through: BrandManufacturer})

module.exports = {
    User,
    Cart,
    CartProduct,
    Product,
    Brand,
    Manufacturer,
    TypeOfCare,
    BrandManufacturer,
    TypeOfCareBrand,
    TypeOfCareManufacturer
}