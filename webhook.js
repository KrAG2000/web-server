const axios = require('axios');
const path = require('path');
const express = require('express');
// const unomiUrl = 'http://localhost:9200/cxs';
const unomiUrl = 'https://dxp-core.oslabs.app/cxs';
// const essUrl = 'https://dxp-middleware.oslabs.app/ess';

const port = process.env.PORT || 9999;

const app = express();
app.use(express.static(path.join(__dirname, '/')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // res.sendFile(__dirname + "/index2.html");
});

app.post('/webhook', (req, res) => {
  console.log("----------------START----------------");
  console.log(req.headers.email, ":", req.body);
  console.log("----------------END----------------");
  res.send(JSON.parse(req));
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
