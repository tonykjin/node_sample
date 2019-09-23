'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    team_name: DataTypes.STRING
  }, {});
  Team.associate = function(models) {
    Team.belongsToMany(models.Employee { through: models.Employee })
  };
  return Team;
};
