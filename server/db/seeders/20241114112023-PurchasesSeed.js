'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Purchases', [
      {
       user_id: 1,
       product_id: 1,
       quantity: 2,
       deliverydate: '2024-11-02 00:00:00',
       createdAt: new Date(),
       updatedAt: new Date(),
       },
       {
        user_id: 1,
        product_id: 2,
        quantity: 1,
        deliverydate: '2024-11-02 00:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          user_id: 2,
          product_id: 3,
          quantity: 1,
          deliverydate: '2024-11-03 00:00:00',
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
            user_id: 2,
            product_id: 4,
            quantity: 2,
            deliverydate: '2024-11-03 00:00:00',
            createdAt: new Date(),
            updatedAt: new Date(),
            },
            {
              user_id: 2,
              product_id: 5,
              quantity: 1,
              deliverydate: '2024-11-03 00:00:00',
              createdAt: new Date(),
              updatedAt: new Date(),
              },
              {
                user_id: 3,
                product_id: 5,
                quantity: 1,
                deliverydate: '2024-10-31 00:00:00',
                createdAt: new Date(),
                updatedAt: new Date(),
                },
                // {
                //   user_id: 3,
                //   product_id: 1,
                //   quantity: 2,
                //   deliverydate: '2024-10-31 00:00:00',
                //   createdAt: new Date(),
                //   updatedAt: new Date(),
                //   },
                  // {
                  //   user_id: 3,
                  //   product_id: 2,
                  //   quantity: 1,
                  //   deliverydate: '2024-10-31 00:00:00',
                  //   createdAt: new Date(),
                  //   updatedAt: new Date(),
                  //   },
                  ], {});
                },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Purchases', null, {});
  }
};