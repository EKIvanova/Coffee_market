const express = require('express');
const { Purchase } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const purchaseRouter = express.Router();

  purchaseRouter.get('/', verifyAccessToken, async (req, res) => {
    try {
      const purchases = await Purchase.findAll({ where: { userId: res.locals.user.id } });
      res.json(purchases);
    } catch (error) {
      console.log(error);
      res.status(500).json({ text: 'Ошибка получения заказа', message: error.message });
    }
  });
  

module.exports = purchaseRouter;