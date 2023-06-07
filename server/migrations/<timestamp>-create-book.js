module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Books', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },
        author: {
          type: Sequelize.STRING
        },
        coverImage: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.DECIMAL(10, 2)
        },
        tag: {
          type: Sequelize.ARRAY(Sequelize.STRING)
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Books');
    }
  };
  