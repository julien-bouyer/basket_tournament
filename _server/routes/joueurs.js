'use strict';

const express = require('express'),
    router = express.Router();

/* GET joueurs listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/joueur', function (req, res) {
  res.send('Got a PUT request at /joueur');
});

router.delete('/joueur', function (req, res) {
  res.send('Got a DELETE request at /joueur');
});

module.exports = router;
