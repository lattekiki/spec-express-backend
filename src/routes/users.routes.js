const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const errorMiddleware = require('../middlewares/error.middleware');

router.get('/', userController.getALLUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;