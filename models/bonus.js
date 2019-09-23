'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bonus = sequelize.define('Bonus', {
    bonus_date: DataTypes.DATE,
    bonus_amount: DataTypes.INTEGER
  }, {});
  Bonus.associate = function(models) {
    // associations can be defined here
  };
  return Bonus;
};