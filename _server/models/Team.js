const db = require('../db/database'); //reference of db/database.js
const Team = {
    getAll(callback) {
        return db.query('select * from team', callback);
    },
    getById(id, callback) {
        return db.query('select * from team where id = ?', [id], callback);
    },
    add(team, callback) {
        return db.query('insert into team (name, city, sex, county) values (?, ?, ?, ?)', [team.name, team.city, team.sex, team.county], callback);
    },
    delete(id, callback) {
        return db.query('delete from team where id = ?', [id], callback);
    },
    update(id, team, callback) {
        return db.query('update team set name = ?, city = ?, sex = ?, county = ? where id = ?', [team.name, team.city, team.sex, team.county, id], callback);
    },
    deleteAll(items, callback) {
        let delarr = [];
        [].forEach.call(items, item => {
            delarr.push(item);
        });
        return db.query('delete from team where id in (?)', [delarr], callback);
    }
};
module.exports = Team;
