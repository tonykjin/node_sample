'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    client_name: DataTypes.STRING,
    importance: DataTypes.ENUM('1', '2', '3', '4', '5')
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};
