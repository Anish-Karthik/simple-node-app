// Import the required modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

app.use(cors())

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route handler for a custom path
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
