module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Routes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    from: {
      type: Sequelize.STRING
    },
    to: {
      type: Sequelize.STRING
    },
    stops: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Routes')
};
