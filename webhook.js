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

app.post('/webhook', async (req, res) => {

  const { email } = req.headers
  const domain = req.headers.origin

  if (
    !req.body ||
    !email ||
    email.trim() === '' ||
    !/^\S+@\S+\.\S+$/.test(email)
  ) {
    res.send({"status": 400, "error": "Bad request error!"});
  }
  else{
    res.send({"status": 200, "body": req.body})
  }
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
