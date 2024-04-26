// utils/db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // MongoDB connection URI
let client;

async function connectToDatabase() {
  try {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

function getClient() {
  if (!client) {
    throw new Error('MongoDB client has not been initialized.');
  }
  return client;
}

module.exports = { connectToDatabase, getClient };
