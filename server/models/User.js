const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// User registration
User.register = async function (username, password) {
  try {
    const user = await User.create({
      username,
      password,
    });
    return user;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

// User login
User.login = async function (username, password) {
  try {
    const user = await User.findOne({
      where: {
        username,
        password,
      },
    });
    return user;
  } catch (error) {
    throw new Error('Invalid username or password');
  }
};

module.exports = User;
