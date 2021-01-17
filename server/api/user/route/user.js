const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const auth = require('../../../config/auth');

router.post('/', auth, userController.create);
router.get('/', auth, userController.findAll);
router.get('/:id', auth, userController.findOne);
router.put('/:id', auth, userController.update);
router.post('/login', userController.loginUser);

module.exports = router;
