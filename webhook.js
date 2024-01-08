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

app.post('/webhook', async (req, res) => {
  console.log("----------------START----------------");
  console.log(req.body["messenger user id"]);
  console.log(req.body["first name"]);
  console.log("----------------END----------------");
);

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
