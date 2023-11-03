const express = require('express');
const port = process.env.PORT || 9999;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
  console.log("Rnning");
});

app.post('/webhook', (req, res) => {
  const message = req.body;
  try {
    res.statusCode(201).send({
      text: `You sent the message: ${message}`
    });
  } catch (error) {
    res.statusCode(204).send("[ ERROR ] - Message is empty!");
  }
  if(message){
  }
  else{

  }
});

app.listen(port, () => {
  console.log(`[ INFO ] - Listening to ${port} server successful!`);
});
