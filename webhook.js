const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const port = process.env.PORT || 9999;

const app = express();
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/img/favicon.ico", () => {
  console.log("Favicon ICO");
})

app.post('/webhook', (req, res) => {
  console.log("Started!");
    if(req && req.body){
      console.log("Hi, req.body present!");
      console.log("MUID from body: ", req.body['messenger user id']);
      console.log("First name from body: ", req.body['first name']);
      console.log("Email from headers: ", req.headers['email']);
      res.send({status: 200});
    }
    else if(req && !req.body){
      console.log("request here but no req.body!!");
      res.send({status: 400});
    }
    else{
      console.log("No request at all!!!");
      res.send({status: 400});
    }
  
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
