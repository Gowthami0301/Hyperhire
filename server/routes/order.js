const express = require('express');
const { Op } = require('sequelize');
const { Order } = require('../models');

const router = express.Router();

// Get books with pagination
router.get('/', async (req, res) => {
  const { page = 1, pageSize = 10, searchQuery } = req.query;
  const offset = (page - 1) * pageSize;
  const limit = pageSize;

  try {
    let whereClause = {};
    if (searchQuery) {
      whereClause = {
        title: {
          [Op.iLike]: `%${searchQuery}%`
        }
      };
    }

    const { count, rows } = await Order.findAndCountAll({
      where: whereClause,
      offset,
      limit
    });

    res.json({
      order: rows,
      totalCount: count,
      currentPage: page,
      totalPages: Math.ceil(count / pageSize)
    });
  } catch (error) {
    console.error('Error retrieving order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const { title, email,phone, price } = req.body;

  try {
    const order = await Order.create({
      title,
      email,
      phone,
      price
        });

    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
