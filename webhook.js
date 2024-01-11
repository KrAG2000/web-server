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
    console.log("BODY: ", req.body);
    console.log("EMAIL: ", req.headers.email);
    res.send({"status": 200, "body": req.body});
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
