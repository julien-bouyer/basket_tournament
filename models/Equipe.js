var db = require('../db/database'); //reference of db/database.js

var Equipe = {
  getAll: function(callback) {
    return db.query('select * from equipe', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from equipe where id = ?', [id], callback);
  },
  add: function(equipe, callback) {
    return db.query('insert into equipe (nom, commune, sexe) values (?, ?, ?)', [equipe.nom, equipe.commune, equipe.sexe], callback);
  },
  delete: function(id, callback) {
    return db.query('delete from equipe where id = ?', [id], callback);
  },
  update: function(id, equipe, callback) {
    return db.query('update equipe set nom = ?, date_equipe = ?, saison = ?, lieu = ? where id = ?', [equipe.nom, equipe.dateEquipe, equipe.saison, equipe.lieu, id], callback);
  },
  deleteAll: function(item, callback) {
    var delarr = [];
    for (i = 0; i < item.length; i++) {
      delarr[i] = item[i].id;
    }
    return db.query('delete from equipe where id in (?)', [delarr], callback);
  }
};
module.exports = Equipe;
