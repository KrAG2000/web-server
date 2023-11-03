const express = require('express');
// const port = process.env.PORT || 9999;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
  console.log("Rnning");
});

// Define the API endpoint.
app.post('/webhook', (req, res) => {
  // Get the message from the request body.
  const message = req.body.message;

  // // Send a response to Chatfuel.
  res.send({
    text: `You sent the message: ${message}`
  });
  console.log(req.body);
});

// Start the server.
app.listen(3000);
