const express = require('express');
const port = process.env.PORT || 9999;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
  console.log("[INFO] - [200] - GET Successful!");
});

app.post('/webhook', async (req, res) => {
  console.log("----------------START----------------");

  let parsedData;
  try {
    const data = await req.buffer();
    parsedData = JSON.parse(data);
  } 
  
  catch (error) {
    console.error("[ ERROR ] - [400] - Invalid JSON body!");
    res.status(400).json({
      "text": `Invalid JSON body!`
    });
    return;
  }

  res.status(200).json({
    "text": `You sent the message: >>>${parsedData.message}<<<`
  });
  console.log("----------------END----------------");
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});