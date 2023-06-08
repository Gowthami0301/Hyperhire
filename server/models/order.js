
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // No associations in this example
    }
  }

  Order.init(
    {
      title: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: 'Order'
    }
  );

  return Order;
};
