const db = require('../../models');
const bcrypt = require('bcrypt');
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  // Validate request
  const user = req.body.user;
  if (!user) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  const isUser = await User.findAll({ where: { login: user.login } });
  if (isUser.length >= 1) {
    return res.status(409).json({
      message: 'login already in use',
    });
  }

  user.password = await bcrypt.hash(user.password, 8);

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
  const login = req.query.login;
  var condition = login ? { login: { [Op.iLike]: `%${login}%` } } : null;

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
  const uuid = req.params.uuid;

  User.findByUuid(uuid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving User with uuid: ${uuid}`,
      });
    });
};

exports.update = async (req, res) => {
  // Validate request
  const user = req.body.user;
  if (!user) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }
  const id = req.params.id;

  user.password = await bcrypt.hash(user.password, 8);

  User.update(user, {
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
    await user.generateAuthToken();
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};
