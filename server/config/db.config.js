module.exports = {
  HOST: process.env.POSTGRES_HOST,
  PORT: process.env.POSTGRES_PORT,
  USER: process.env.POSGRES_USER,
  PASSWORD: process.env.POSGRES_PASSWORD,
  DB: process.env.POSTGRES_DB,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
