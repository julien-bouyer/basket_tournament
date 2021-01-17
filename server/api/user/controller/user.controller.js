const db = require('../../models');
const bcrypt = require('bcrypt');
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  // Validate request
  if (!req.body.login) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  const isUser = await User.findAll({ where: { email: req.body.email } });
  if (isUser.length >= 1) {
    return res.status(409).json({
      message: 'email already in use',
    });
  }

  const password = await bcrypt.hash(req.body.password, 8);
  // Create a User
  const user = {
    login: req.body.login,
    password: password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    role: req.body.role,
  };

  // Save User in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving User with id: ${id}`,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'User was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update User with id: ${id}. Maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error updating User with id: ${id}`,
      });
    });
};

exports.loginUser = async (req, res) => {
  try {
    const login = req.body.login;
    const password = req.body.password;
    const user = await User.findByCredentials(login, password);
    if (!user) {
      return res.status(401).json({ error: 'Login failed! Check authentication credentials' });
    }
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json(error);
  }
};
