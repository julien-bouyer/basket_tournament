const Team = require('../models/Team');

exports.find = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Team.getById(id);
    if (!data) {
      return res.status(401).json({
        message: `Team not found for id [${id}]`,
      });
    }
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Team.find();
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Cannot get all teams' });
  }
};

exports.save = async (req, res) => {
  try {
    let team;
    const id = req.params.id;
    if (id) {
      team = await Team.findById(id);
      if (!team) {
        return res.status(404).json({ message: `Team not found for id [${id}]` });
      }
    }
    if (!team) {
      team = new Team();
    }
    team.name = req.body.name;
    // TODO mapping
    let data = await team.save();
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    let data = await Team.deleteOne({ _id: req.params.id });
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
};

