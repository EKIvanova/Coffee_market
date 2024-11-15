'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
       name: 'Ivan Ivanov',
       email: 'ivan@gmail.com',
       hashpass: '123hY',
       createdAt: new Date(),
       updatedAt: new Date(),
       },
       {
        name: 'Sergei Zaycev',
        email: 'sergei@gmail.com',
        hashpass: '589kop',
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          name: 'Ilya Sokolov',
          email: 'ilya@gmail.com',
          hashpass: '478i_ls',
          createdAt: new Date(),
          updatedAt: new Date(),
          },
      ], {});
    },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};