var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController')

router.get('/', UserController.listUser);
router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser);

module.exports = router;
