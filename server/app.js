// app.js

const express = require('express');
const { Sequelize } = require('sequelize');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const bookRoutes = require('./routes/book');
const orderRoutes = require('./routes/order');
const userRoutes = require('./routes/user');



const app = express();
const port = 4000;

// Database connection
const sequelize = new Sequelize('book', 'root', '', {
  dialect: 'postgres'
});

// Test the database connection
(async () => {
  try {
    console.log(sequelize);
    await sequelize.authenticate();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Middleware
app.use(express.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/books', bookRoutes);
app.use('/order', orderRoutes);
app.use('/users', userRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
