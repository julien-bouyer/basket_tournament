'use strict';
const express = require('express'),
    router = express.Router(),
    Tournament = require('../models/Tournament');

function getAll(res) {
    Tournament.getAll((err, rows) => {
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
        Tournament.getById(req.params.id, (err, rows) => {
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
    Tournament.add(req.body, err => {
        if (err) {
            res.json(err);
        } else {
            getAll(res);
        }
    });
});
router.delete('/:id', (req, res) => {
    Tournament.delete(req.params.id, err => {
        if (err) {
            res.json(err);
        } else {
            getAll(res);
        }
    });
});
router.put('/:id', (req, res) => {
    Tournament.update(req.params.id, req.body, err => {
        if (err) {
            res.json(err);
        } else {
            getAll(res);
        }
    });
});
module.exports = router;
