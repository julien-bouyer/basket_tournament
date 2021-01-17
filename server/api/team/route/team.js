const express = require('express');
const router = express.Router();
const teamController = require('../controller/team.controller');
const auth = require('../../../config/auth');

router.get('/:id', auth, teamController.find);
router.get('/', auth, teamController.findAll);
router.post('/', auth, teamController.save);
router.put('/:id', auth, teamController.save);
router.delete('/:id', auth, teamController.delete);

module.exports = router;
