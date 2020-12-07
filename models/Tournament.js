var db = require('../db/database'); //reference of db/database.js

var Tournament = {
  getAll: function(callback) {
    return db.query('select * from tournament', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from tournament where id = ?', [id], callback);
  },
  add: function(tournament, callback) {
    return db.query('insert into tournament (name, date_tournament, season, place) values (?, ?, ?)', [tournament.name, tournament.dateTournoi, tournament.season, tournament.place], callback);
  },
  delete: function(id, callback) {
    return db.query('delete from tournament where id = ?', [id], callback);
  },
  update: function(id, tournament, callback) {
    return db.query('update tournament set name = ?, date_tournament = ?, season = ?, place = ? where id = ?', [tournament.name, tournament.dateTournoi, tournament.season, tournament.place, id], callback);
  },
  deleteAll: function(item, callback) {
    var delarr = [];
    for (i = 0; i < item.length; i++) {
      delarr[i] = item[i].id;
    }
    return db.query('delete from tournament where id in (?)', [delarr], callback);
  }
};
module.exports = Tournament;