// server.js
const { connectToDatabase } = require('./utils/db');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectToDatabase()
  .then(() => {
    // Start your Express server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Failed to start server:', error);
    process.exit(1); // Exit the process with error code 1
  });
