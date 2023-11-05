const express = require('express');
const port = process.env.PORT || 9999;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
  console.log("[INFO] - [200] - Successful!");
});

app.post('/webhook', (req, res) => {
  console.log("----------------START----------------");
  
  req.on('data',(data) => {
    if(data || data != "") {
      const parsedData = JSON.parse(data);
      res.send({
        "text": `You sent the message: >>>${parsedData}<<<`
      });
    }
    else{
      res.send({
        "message": 'No message has been received!'
      });
      console.error("[ ERROR ] - [204] - Message is empty!");
    }
  })


  console.log("----------------END----------------");
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
