const express = require('express');
const { Op } = require('sequelize');
const { Book } = require('../models');

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

    const { count, rows } = await Book.findAndCountAll({
      where: whereClause,
      offset,
      limit
    });

    res.json({
      books: rows,
      totalCount: count,
      currentPage: page,
      totalPages: Math.ceil(count / pageSize)
    });
  } catch (error) {
    console.error('Error retrieving books:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
