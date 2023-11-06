const express = require('express');
const port = process.env.PORT || 9999;
const app = express();


app.post('/webhook', (req, res) => {
  console.log("----------------START----------------");
  
  req.on('data',(data) => {
    if(data){
      const parsedData = JSON.parse(data);
      console.log(parsedData);

      let response = '';
      for (const [key, value] of Object.entries(parsedData)) {
        response += `${key}: ${value}, `;
      }

      res.send({
        "message": response
      });
      for (const key in parsedData) {
        console.log(key, " ---------- ", parsedData[key]);
      }
      console.log(parsedData);
    }
    else{
      res.send({
        "message": 'No message has been received!'
      });
    }
  })
  console.log("----------------END----------------");
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
