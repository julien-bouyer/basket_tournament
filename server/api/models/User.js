const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    login: {
      type: Sequelize.STRING(50),
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: Sequelize.STRING(60),
    firstname: Sequelize.STRING(50),
    lastname: Sequelize.STRING(50),
    email: Sequelize.STRING(200),
    role: Sequelize.STRING(20),
    token: Sequelize.STRING,
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

  User.findByUuid = async uuid => {
    let user = await User.findOne({
      where: { uuid },
    });
    return user;
  };

  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { login },
    });

    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }

    return user;
  };

  User.findByCredentials = async (login, password) => {
    const user = await User.findByLogin(login);
    if (!user) {
      throw new Error({ error: 'Invalid login details' });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login details' });
    }
    return user;
  };

  User.prototype.generateAuthToken = async function() {
    const user = this;
    user.token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.AUTH_SECRET);
    const num = await User.update(user, {
      where: { id: user.id },
    });
    console.log(num);
  };

  return User;
};
