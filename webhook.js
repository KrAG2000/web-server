const express = require('express');
const port = process.env.PORT || 9999;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
  console.log("[INFO] - [200] - Successful!");
});

app.post('/webhook', (req, res) => {
  const message = req.body;
  try {
    res.statusCode(201).send({
      text: `You sent the message: ${message}`
    });
  } catch (error) {
    console.error("[ ERROR ] - [204] - Message is empty!");
  }
  if(message){
  }
  else{

  }
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
