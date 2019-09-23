'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'team_members',
      'team_id',
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
    .then(() => {
      return queryInterface.addColumn(
        'team_members',
        'employee_id',
        {
          type: Sequelize.UUID,
          references: {
            model: 'Employees',
            key: 'id'
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        }
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'team_members',
      'team_id'
    )
    .then(() => {
      return queryInterface.removeColumn(
        'team_members',
        'employee_id'
      )
    })
  }
};
