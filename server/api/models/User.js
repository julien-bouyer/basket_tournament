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
    login: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    role: Sequelize.STRING,
    token: Sequelize.STRING,
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

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
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.AUTH_SECRET);
    user.token = token;
    await User.update(user, {
      where: { id: user.id },
    });
    return token;
  };

  return User;
};
