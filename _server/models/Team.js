const db = require('../db/database'); //reference of db/database.js
const Team = {
    getAll: function (callback) {
        return db.query('select * from team', callback);
    },
    getById: function (id, callback) {
        return db.query('select * from team where id = ?', [id], callback);
    },
    add: function (team, callback) {
        return db.query('insert into team (name, city, sex, county) values (?, ?, ?, ?)', [team.name, team.city, team.sex, team.county], callback);
    },
    delete: function (id, callback) {
        return db.query('delete from team where id = ?', [id], callback);
    },
    update: function (id, team, callback) {
        return db.query('update team set name = ?, city = ?, sex = ?, county = ? where id = ?', [team.name, team.city, team.sex, team.county, id], callback);
    },
    deleteAll: function (items, callback) {
        let delarr = [];
        [].forEach.call(items, function (item) {
            delarr.push(item);
        });
        return db.query('delete from team where id in (?)', [delarr], callback);
    }
};
module.exports = Team;
