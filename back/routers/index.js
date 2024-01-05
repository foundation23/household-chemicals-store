const Router = require('express')
const router = new Router
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const brandRouter = require('./brandRouter')
const manufacturerRouter = require('./manufacturerRouter')
const cartRouter = require('./cartRouter')
const typeCareRouter = require('./typeCareRouter')

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/cart', cartRouter)
router.use('/manufacturer', manufacturerRouter)
router.use('/product', productRouter)
router.use('/typeCare', typeCareRouter)

module.exports = router