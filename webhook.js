const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 9999;

const app = express();
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // res.sendFile(__dirname + "/index2.html");
});

app.post('/webhook', (req, res) => {
    console.log("----------------START----------------");
    console.log(req.body);
    console.log("----------------END----------------");
    res.send({"statusCode": "It's 204, No data!"});
  });

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
