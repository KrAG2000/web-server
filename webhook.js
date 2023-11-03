const express = require('express');
const port = process.env.PORT || 9999;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()); 

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
  console.log("[INFO] - [200] - Successful!");
});



app.post('/webhook', async (req, res) => {
  console.log("----------------START----------------");

  const message = req.body.message;

  if (message) {
    res.send({
      "text": `You sent the message: ${message}`
    });
  } else {
    res.send({
      "text": `No message was received!`
    });
    console.error("[ ERROR ] - [204] - Message is empty!");
  }

  console.log("----------------END----------------");
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
