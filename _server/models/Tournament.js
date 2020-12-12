const db = require('../db/database'); //reference of db/database.js
const Tournament = {
    getAll(callback) {
        return db.query('select * from tournament', callback);
    },
    getById(id, callback) {
        return db.query('select * from tournament where id = ?', [id], callback);
    },
    add(tournament, callback) {
        return db.query('insert into tournament (name, date_tournament, season, place) values (?, ?, ?, ?)', [tournament.name, tournament.date_tournament, tournament.season, tournament.place], callback);
    },
    delete(id, callback) {
        return db.query('delete from tournament where id = ?', [id], callback);
    },
    update(id, tournament, callback) {
        return db.query('update tournament set name = ?, date_tournament = ?, season = ?, place = ? where id = ?', [tournament.name, tournament.date_tournament, tournament.season, tournament.place, id], callback);
    },
    deleteAll(items, callback) {
        let delarr = [];
        [].forEach.call(items, item => {
            delarr.push(item);
        });
        return db.query('delete from tournament where id in (?)', [delarr], callback);
    }
};
module.exports = Tournament;
