'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
        return Promise.all([
            queryInterface.addColumn('Users', 'mdob', {
              type: Sequelize.DataTypes.STRING
            }, { transaction: t }),
            queryInterface.addIndex('Users', ['mdob'], {transaction : t})
        ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
          queryInterface.removeIndex('Users', ['mdob'], {transaction : t}),
          queryInterface.removeColumn('Users', 'mdob', { transaction: t }),
      ]);
  });
}
};
