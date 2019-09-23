'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Titles',
      'employee_ref_id',
      {
        type: Sequelize.UUID,
        references: {
          model: "Employees",
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Titles',
      'employee_ref_id'
    )
  }
};
