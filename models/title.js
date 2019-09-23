'use strict';
module.exports = (sequelize, DataTypes) => {
  const Title = sequelize.define('Title', {
    title_name: DataTypes.STRING,
    affective_date: DataTypes.DATE
  }, {});
  Title.associate = function(models) {
    // associations can be defined here
  };
  return Title;
};