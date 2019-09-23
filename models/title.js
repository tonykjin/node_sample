'use strict';
module.exports = (sequelize, DataTypes) => {
  const Title = sequelize.define('Title', {
    title_name: DataTypes.STRING,
    affective_date: DataTypes.DATE
  }, {});
  Title.associate = function(models) {
    Title.belongsTo(models.Employee);
  };
  return Title;
};
