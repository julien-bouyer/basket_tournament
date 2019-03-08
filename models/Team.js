var db = require('../db/database'); //reference of db/database.js

var Team = {
  getAll: function(callback) {
    return db.query('select * from team', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from team where id = ?', [id], callback);
  },
  add: function(team, callback) {
    return db.query('insert into team (name, city, sex, county) values (?, ?, ?, ?)', [team.name, team.city, team.sex, team.county], callback);
  },
  delete: function(id, callback) {
    console.log('Team : delete ' + id);
    return db.query('delete from team where id = ?', [id], callback);
  },
  update: function(id, team, callback) {
    return db.query('update team set name = ?, city = ?, sex = ?, county = ? where id = ?', [team.name, team.city, team.sex, team.county, id], callback);
  },
  deleteAll: function(item, callback) {
    var delarr = [];
    for (i = 0; i < item.length; i++) {
      delarr[i] = item[i].id;
    }
    return db.query('delete from team where id in (?)', [delarr], callback);
  }
};
module.exports = Team;
