var express = require('express');
var router = express.Router();

/* GET equipes listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/equipe', function (req, res) {
  res.send('Got a PUT request at /equipe');
});

router.delete('/equipe', function (req, res) {
  res.send('Got a DELETE request at /equipe');
});

module.exports = router;
