const db = require('../../models');
const Tournament = db.tournament;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const tournament = req.body.tournament;
  // Validate request
  if (!tournament) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Save Tournament in the database
  Tournament.create(tournament)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Tournament.',
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Tournament.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tournaments.',
      });
    });
};

exports.findOne = (req, res) => {
  const uuid = req.params.uuid;

  Tournament.findByUuid(uuid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving Tournament with id: ${id}`,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Tournament.update(req.body, {
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Tournament was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Tournament with id: ${id}. Maybe Tournament was not found or req.body is empty!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error updating Tournament with id: ${id}`,
      });
    });
};

exports.loginTournament = async (req, res) => {
  try {
    const login = req.body.login;
    const password = req.body.password;
    const tournament = await Tournament.findByCredentials(login, password);
    if (!tournament) {
      return res.status(401).json({ error: 'Login failed! Check authentication credentials' });
    }
    const token = await tournament.generateAuthToken();
    res.status(201).json({ tournament, token });
  } catch (error) {
    res.status(400).json(error);
  }
};
