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

let data;
app.get("/data", (req, res) => {
  if(data){  
  res.send({
    "data": data
  });
  }
  else{
    res.send({"message": "No data"})
  }
});

app.post('/webhook', async (req, res) => {
  let result = 0
  console.log("**********");
    if(req && req.body){
      console.log("Hi, req.body present!");
      console.log("MUID from body: ", req);
      // console.log("First name from body: ", req.body['first name']);
      // console.log("Email from headers: ", req.headers['email']);
      result = 200
    }
    else if(req && !req.body){
      console.log("request here but no req.body!!");
      result = 204
    }
    else{
      console.log("No request at all!!!");
      result = 400
    }  
  console.log(result);
  res.send({status: result})
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
