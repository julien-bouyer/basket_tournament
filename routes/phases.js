var express = require('express');
var router = express.Router();

/* GET phases listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/phase', function (req, res) {
  res.send('Got a PUT request at /phase');
});

router.delete('/phase', function (req, res) {
  res.send('Got a DELETE request at /phase');
});

module.exports = router;
