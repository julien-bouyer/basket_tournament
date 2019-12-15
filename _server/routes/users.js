'use strict';

const express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

module.exports = router;
