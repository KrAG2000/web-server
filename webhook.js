const express = require('express');
const port = process.env.PORT || 9999;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
  console.log("[INFO] - [200] - Successful!");
});

app.post('/webhook', (req, res) => {
  console.log("----------------START----------------");

  const message = req.body;
    if(message != "" || message != {}){
      console.log(message);
      res.send({
        text: `You sent the message: ${message}`
      });
    }
    else{
      console.error("[ ERROR ] - [204] - Message is empty!");
    }

  console.log("----------------END----------------");
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
