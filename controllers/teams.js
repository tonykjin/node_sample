const Team = require('../models/team.js');

exports.create = (req, res) => {
  Team.create({
    team_name: req.body.name
  }).then(result => {
    res.status(200).send({
      result: result
    });
  });
}

exports.findAll = (req, res) => {
  Team.findAll()
    .then(team => {
      res.status(200).send({
        teams: team
      });
    });
}
