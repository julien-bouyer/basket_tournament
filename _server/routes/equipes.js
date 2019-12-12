'use strict';

var express = require('express'),
    router = express.Router(),
    Team = require('../models/Team');

/* GET tournois listing. */
router.get('/:id?', function(req, res) {
  if (req.params.id) {
    Team.getById(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Team.getAll(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post('/', function(req, res) {
  Team.add(req.body, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      let equipe = req.body;
      equipe.id = result.insertId;
      res.json(equipe);
    }
  });
});
router.delete('/:id', function(req, res) {
  Team.delete(req.params.id, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
router.put('/:id', function(req, res) {
  Team.update(req.params.id, req.body, function(err) {
    if (err) {
      res.json(err);
    } else {
      let equipe = req.body;
      equipe.id = parseInt(req.params.id, 10);
      res.json(equipe);
    }
  });
});
module.exports = router;
