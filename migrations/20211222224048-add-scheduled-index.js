'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.sequelize.transaction(t => {
      return Promise.all([
          queryInterface.addIndex('Messages', ['scheduledAt'], {transaction : t})
      ]);
  });
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
        return Promise.all([
            queryInterface.removeIndex('Messages', ['scheduledAt'], {transaction : t})
        ]);
    });
  }
};
