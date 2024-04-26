// controllers/dataController.js
const { getClient } = require('../utils/db');

// Get MongoDB client instance
const client = getClient();

// Define collection and CRUD operations
const collection = client.db('mydatabase').collection('mycollection');

async function getAllData() {
  try {
    return await collection.find().toArray();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate error to caller
  }
}

// Define other CRUD operations (create, read, update, delete)

module.exports = { getAllData };
