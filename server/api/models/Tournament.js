module.exports = (sequelize, Sequelize) => {
  const Tournament = sequelize.define('tournament', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    uid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: Sequelize.STRING(30),
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    dateTournament: Sequelize.DATE,
    season: Sequelize.STRING(15),
    place: Sequelize.STRING(30),
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

  return Tournament;
};
