var express = require('express');
var router = express.Router();
var Tournament = require('../models/Tournament');

var db = require('../db/database');

/* GET tournois listing. */
router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    Tournament.getById(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Tournament.getAll(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post('/', function(req, res, next) {
  Tournament.add(req.body, function(err, count) {
    //console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});
// router.post('/:id', function(req, res, next) {
//   Tournament.deleteAll(req.body, function(err, count) {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(count);
//     }
//   });
// });
router.delete('/:id', function(req, res, next) {
  Tournament.delete(req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put('/:id', function(req, res, next) {
  Tournament.update(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
