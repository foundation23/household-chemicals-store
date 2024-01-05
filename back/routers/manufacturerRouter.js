const Router = require('express')
const router = new Router
const manufacturerController = require('../controllers/manufacturerController')
const checkRole = require('../middleware/checkRoleMidleware')

router.post('/', checkRole('ADMIN'), manufacturerController.create)
router.get('/', manufacturerController.getAll)
router.delete('/:id', checkRole('ADMIN'), manufacturerController.delete)

module.exports = router