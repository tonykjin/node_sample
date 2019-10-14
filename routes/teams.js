module.exports = app => {
  const teams = require('../controllers/teams');

  app.post('/new/team', teams.create);

  app.get('/team/all', teams.findAll);

}
