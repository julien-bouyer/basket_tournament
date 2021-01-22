const express = require('express');
const router = express.Router();
const tournamentController = require('../controller/tournament.controller');
const auth = require('../../../config/auth');

router.post('/', auth, tournamentController.create);
router.get('/', auth, tournamentController.findAll);
router.get('/:id', auth, tournamentController.findOne);
router.put('/:id', auth, tournamentController.update);
// router.delete('/:id', auth, tournamentController.delete);

module.exports = router;
