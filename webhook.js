const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 9999;

const app = express();
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/webhook', (req, res) => {
  console.log(req ? req.body['messenger user id'] : "No request payload!")
    if(req && req.body){
      console.log("Hi, req.body present!");
      console.log("MUID from body: ", req.body['messenger user id']);
      console.log("First name from body: ", req.body['first name']);
      console.log("Email from headers: ", req.headers['email']);
      res.send({status: 200});
    }
    else if(req && !req.body){
      console.log("request here but no req.body!!");
    }
    else{
      console.log("No request at all!!!");
    }
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
