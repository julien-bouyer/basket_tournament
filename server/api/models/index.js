const Sequelize = require('sequelize');
const dbConfig = require('../../config/db.config.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// const models = {
//   User: sequelize.import('./User'),
// };
 
// Object.keys(models).forEach(key => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.team = require('./Team.js')(sequelize, Sequelize);
db.user = require('./User.js')(sequelize, Sequelize);  
db.tournament = require('./Tournament.js')(sequelize, Sequelize);  

module.exports = db;
