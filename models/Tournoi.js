var db = require('../db/database'); //reference of db/database.js

var Tournoi = {
  getAll: function(callback) {
    return db.query('select * from tournoi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from tournoi where id = ?', [id], callback);
  },
  add: function(tournoi, callback) {
    return db.query('insert into tournoi (nom, date_tournoi, saison, lieu) values (?, ?, ?)', [tournoi.nom, tournoi.dateTournoi, tournoi.saison, tournoi.lieu], callback);
  },
  delete: function(id, callback) {
    return db.query('delete from tournoi where id = ?', [id], callback);
  },
  update: function(id, tournoi, callback) {
    return db.query('update tournoi set nom = ?, date_tournoi = ?, saison = ?, lieu = ? where id = ?', [tournoi.nom, tournoi.dateTournoi, tournoi.saison, tournoi.lieu, id], callback);
  },
  deleteAll: function(item, callback) {
    var delarr = [];
    for (i = 0; i < item.length; i++) {
      delarr[i] = item[i].id;
    }
    return db.query('delete from tournoi where id in (?)', [delarr], callback);
  }
};
module.exports = Tournoi;
