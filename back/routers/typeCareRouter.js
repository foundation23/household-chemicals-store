const Router = require('express')
const router = new Router
const typeCareController = require('../controllers/typeCareController')
const checkRole = require("../middleware/checkRoleMidleware");


router.post('/', checkRole('ADMIN'), typeCareController.create)
router.get('/', typeCareController.getAll)
router.delete('/:id', checkRole('ADMIN'), typeCareController.delete)

module.exports = router