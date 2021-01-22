const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const auth = require('../../../config/auth');

router.post('/', userController.create);
router.get('/', auth, userController.findAll);
router.get('/:uuid', auth, userController.findOne);
router.put('/:uuid', auth, userController.update);
router.post('/login', userController.loginUser);

module.exports = router;
