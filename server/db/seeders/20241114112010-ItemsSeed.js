'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Items', [
     {
      name: 'Эфиопия Оромия',
      roasting_degree: 'эспрессо',
      acidity: 8,
      density: 4,
      brewing_method: 'Эспрессо машина',
      processing_method: 'мытый',
      grinding_degree: 'в зернах',
      description: 'Лёгкий кофе с нотами персика, цедры лимона и молочного шоколада',
      country_of_origin: 'Сидамо', 
      weight: 1000,
      image: 'https://coffee-static.storage.yandexcloud.net/files/shares/data/product/1729857193.6667-espresso-ethiopia-oromiya-1-full.png',
      price: 1969,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
     {
       name: 'Кения Маунт',
       roasting_degree: 'фильтр',
       acidity: 10,
       density: 4,
       brewing_method: 'Пуровер',
       processing_method: 'мытый',
       grinding_degree: 'для пуровера (средний)',
       description: 'Сочный кофе с нотами красной смородины, какао и чёрного чая',
       country_of_origin: 'центральное высокогорье', 
       weight: 250,
       image: 'https://coffee-static.storage.yandexcloud.net/files/shares/data/product/1729850449.2845-kenya-aa-maunt_250_front-full.png',
       price: 759,
       createdAt: new Date(),
       updatedAt: new Date(),
     }, 
     {
      name: 'Колумбия Богота',
      roasting_degree: 'эспрессо',
      acidity: 8,
      density: 6,
      brewing_method: 'Капсулы',
      processing_method: 'мытый',
      grinding_degree: 'капсулы (средний)',
      description: 'Яркий кофе с нотами тёмного винограда, красного яблока и горького шоколада',
      country_of_origin: 'Уила', 
      weight: 55,
      image: 'https://coffee-static.storage.yandexcloud.net/files/shares/data/product/1730012455.1077-capsules_colombia-bogota-al_new-full.png',
      price: 359,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Коста-Рика Лос Тонос',
      roasting_degree: 'эспрессо',
      acidity: 7,
      density: 7,
      brewing_method: 'Капсулы',
      processing_method: 'натуральный',
      grinding_degree: 'капсулы (средний)',
      description: 'Яркий кофе с нотами ананаса, клубники, жасмина и красного вермута',
      country_of_origin: 'Тарразу', 
      weight: 55,
      image: 'https://coffee-static.storage.yandexcloud.net/files/shares/data/product/1730012390.3745-capsules_costa-rica-los-tonos_new-full.png',
      price: 499,
      createdAt: new Date(),
      updatedAt: new Date(),
    },  
    {
      name: 'Перу Улисес Найра',
      roasting_degree: 'эспрессо',
      acidity: 7,
      density: 6,
      brewing_method: 'Капсулы',
      processing_method: 'мытый',
      grinding_degree: 'капсулы (средний)',
      description: 'Сладкий кофе с нотами сливы, красного яблока и фундука',
      country_of_origin: 'Кахамарка', 
      weight: 55,
      image: 'https://coffee-static.storage.yandexcloud.net/files/shares/data/product/1730012410.4904-capsules_peru-ulises-naira_new-full.png',
      price: 499,
      createdAt: new Date(),
      updatedAt: new Date(),
    },  
     ], {});
   },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
