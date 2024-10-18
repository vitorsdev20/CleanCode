const { Router } = require("express");

const userController = require('../controllers/userController')

const router = Router();

const {validateUser, validateUserId} = require("../middlewares/validadeUser")



router.post('/',validateUser , userController.create );

router.put('/:id' ,validateUser, validateUserId, userController.update );

router.delete('/:id',validateUserId, userController.delete);

router.get('/:id',validateUserId, userController.getOne);

router.get('/', userController.getAll);

module.exports = router