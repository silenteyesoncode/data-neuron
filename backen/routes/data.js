// routes/data.js
const express = require('express');
const router = express.Router();
const { getAllData } = require('../controllers/dataController');

// GET all data
router.get('/', async (req, res) => {
  try {
    const data = await getAllData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define other route handlers (e.g., POST, PUT, DELETE)

module.exports = router;
