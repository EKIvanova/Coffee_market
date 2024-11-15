'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Purchase, { foreignKey: 'product_id' })
    }
  }
  Item.init({
    name: DataTypes.STRING,
    roasting_degree: DataTypes.STRING,
    acidity: DataTypes.INTEGER,
    density: DataTypes.INTEGER,
    brewing_method: DataTypes.STRING,
    processing_method: DataTypes.STRING,
    grinding_degree: DataTypes.STRING,
    description: DataTypes.STRING,
    country_of_origin: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};