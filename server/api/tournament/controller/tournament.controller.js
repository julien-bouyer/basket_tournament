const Tournament = require('../models/Tournament');

exports.find = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Tournament.getById(id);
    if (!data) {
      return res.status(401).json({
        message: `Tournament not found for id [${id}]`,
      });
    }
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Tournament.find();
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Cannot get all tournaments' });
  }
};

exports.save = async (req, res) => {
  try {
    let tournament;
    const id = req.params.id;
    if (id) {
      tournament = await Tournament.findById(id);
      if (!tournament) {
        return res.status(404).json({ message: `Tournament not found for id [${id}]` });
      }
    }
    if (!tournament) {
      tournament = new Tournament();
    }
    tournament.name = req.body.name;
    // TODO mapping
    let data = await tournament.save();
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    let data = await Tournament.deleteOne({ _id: req.params.id });
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
};

