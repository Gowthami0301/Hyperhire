
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // No associations in this example
    }
  }

  Book.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      coverImage: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      tag: DataTypes.ARRAY(DataTypes.STRING)
    },
    {
      sequelize,
      modelName: 'Book'
    }
  );

  return Book;
};
