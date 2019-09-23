'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Bonus', //name of Source model
      'employee_ref_id', // key in target model we're adding
      {
        type: Sequelize.UUID,
        references: {
          model: 'Employees', //name of target model
          key: 'id' //key in target model we are referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Bonus', //source model
      'employee_ref_id' // key we want to remove
    )
  }
};
