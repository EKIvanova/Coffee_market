'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      roasting_degree: {
        type: Sequelize.STRING
      },
      acidity: {
        type: Sequelize.INTEGER
      },
      density: {
        type: Sequelize.INTEGER
      },
      brewing_method: {
        type: Sequelize.STRING
      },
      processing_method: {
        type: Sequelize.STRING
      },
      grinding_degree: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      country_of_origin: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};