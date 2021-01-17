const express = require('express');
const router = express.Router();
const tournamentController = require('../controller/tournament.controller');
const auth = require('../../../config/auth');

router.get('/:id', auth, tournamentController.find);
router.get('/', auth, tournamentController.findAll);
router.post('/', auth, tournamentController.save);
router.put('/:id', auth, tournamentController.save);
router.delete('/:id', auth, tournamentController.delete);

module.exports = router;
