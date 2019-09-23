'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Projects',
      'client_id',
      {
        type: Sequelize.UUID,
        references: {
          model: 'Clients',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    )
    .then(() => {
    return queryInterface.addColumn(
      'Projects',
      'primary_team',
      {
        type: Sequelize.UUID,
        references: {
          model: 'Teams',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Projects',
      'client_id'
    )
    .then(() => {
      return queryInterface.addColumn(
        'Projects',
        'primary_team'
      )
    })
  }
};
