'use strict';

const express = require('express'),
    router = express.Router();

/* GET matchs listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/match', function (req, res) {
  res.send('Got a PUT request at /match');
});

router.delete('/match', function (req, res) {
  res.send('Got a DELETE request at /match');
});

module.exports = router;
