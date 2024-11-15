'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
       user_id: 1,
       product_id: 3,
       name: 'Хорошие капсулы для эспрессо',
       description: `Капсулы алюминиевые, протыкаются хорошо (машина Nespresso самых первых серий, уже 10 лет аппарату, 
       перед помещением капсулы делаю прогон воды несколько секунд). Кофе хорош только как эспрессо, как лунго не хватает 
       объема кофе совсем.`,
       mark: 7,
       createdAt: new Date(),
       updatedAt: new Date(),
       },
       {
        user_id: 1,
        product_id: 2,
        name: 'Раньше она была лучше',
        description: `Вряд ли я бы сам стал заказывать Кению Маунт, Но, что то изменилось: то ли моя готовка, то ли мои вкусы, возможно обжарка стала немного сильнее, то ли 
        выращивать кофе стали по другому...но вкус кофе стал более шоколадным.`,
        mark: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          user_id: 3,
          product_id: 5,
          name: 'На любителя, не хватило насыщенности',
          description: `На мой взгляд очень странный сорт: аромат кофе очень слабый, а насыщенность... Представьте, что нормальный эспрессо 
          развели водой 1:1. Сорт на любителя.
          И забавное про материал капсул - нормально проливается только экспрессо (40 мл).`,
          mark: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
          },      
          {
            user_id: 2,
            product_id: 1,
            name: 'Отличный сочный кофе с выраженным цитрусом для эспрессо',
            description: `Кофе с сочным комплексным вкусом цитрусов, фруктов и нотами какао.
            А вот супруга утверждает, что отчетливо ощущает курагу и чернослив во вкусе эспрессо :)
            Эспрессо напитки из этого зерна просто отличные.`,
            mark: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
            },
          ], {});
        },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};