const express = require('express');

const app = express();

// Define the API endpoint.
app.post('/webhook', async (req, res) => {
  // Get the message from the request body.
  const message = req.body.message;

  // Send a response to Chatfuel.
  res.send({
    text: `You sent the message: ${message}`
  });
});

// Start the server.
app.listen(3000);
