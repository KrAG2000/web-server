const express = require('express');
// const port = process.env.PORT || 9999;
const app = express();

app.get("/", (req, res) => {
  console.log("Rnning");
  res.sendFile(__dirname+"/index.html");
});

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
