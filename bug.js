const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user ID
  // ... database query to find the user with the given ID ...
  // Assuming 'user' is found in database
  res.json(user);
});