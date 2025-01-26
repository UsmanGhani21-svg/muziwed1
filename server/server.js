// /server/server.js
const express = require('express');
const path = require('path');
const app = express();

// Set up the static folder for frontend content
app.use(express.static(path.join(__dirname, '../public')));

// Route to serve the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
