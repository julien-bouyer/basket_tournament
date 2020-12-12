'use strict';
const express = require('express'),
    router = express.Router(),
    Team = require('../models/Team');

function getAll(res) {
    Team.getAll((err, rows) => {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
}

/* GET tournois listing. */
router.get('/:id?', (req, res) => {
    if (req.params.id) {
        Team.getById(req.params.id, (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        getAll(res);
    }
});
router.post('/', (req, res) => {
    Team.add(req.body, err => {
        if (err) {
            res.json(err);
        } else {
            getAll(res);
        }
    });
});
router.delete('/:id', (req, res) => {
    Team.delete(req.params.id, err => {
        if (err) {
            res.json(err);
        } else {
            getAll(res);
        }
    });
});
router.put('/:id', (req, res) => {
    Team.update(req.params.id, req.body, err => {
        if (err) {
            res.json(err);
        } else {
            getAll(res);
        }
    });
});
module.exports = router;
