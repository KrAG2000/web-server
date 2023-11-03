const express = require('express');
// const port = process.env.PORT || 9999;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
  console.log("Rnning");
});

app.post('/webhook', (req, res) => {
  const message = req.body;
  if(message){
    res.send({
      text: `You sent the message: ${message}`
    });
    console.log(message);
  }
  else{
    console.log("Message is empty!"); 
  }
});

app.listen(3000);
