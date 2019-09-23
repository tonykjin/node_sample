'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    project_name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    finish_date: DataTypes.DATE,
    priority: DataTypes.ENUM('1', '2', '3', '4', '5')
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};
