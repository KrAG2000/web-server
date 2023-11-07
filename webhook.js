const axios = require('axios');
const path = require('path');
const unomiUrl = 'http://localhost:8181/cxs';
const express = require('express');

const port = process.env.PORT || 9999;

const app = express();
app.use(express.static(path.join(__dirname, '/')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

function generateUUID() {
  let id = '';
  for (let i = 0; i < 24; i++) {
    if (i === 4 || i === 8 || i === 12 || i === 16 || i === 20) {
      id += '-';
    }
    id += Math.floor(Math.random() * 24).toString(24);
  }
  return id;
}

app.post('/webhook', async (req, res) => {
  console.log("----------------START----------------");

  req.on('data', async (data) => {
    if (data && data !== '') {
      const parsedData = JSON.parse(data);
      // console.log(parsedData);

      const profileData = { "intent": ["positive", "negative", "neutral", "unknown"], "main": parsedData};
      try {
        const httpClient = axios.create({
          baseURL: unomiUrl,
          headers: {
            // BELOW LINE IS VERY IMPORTANT AS WITHOUT AUTHENTICATION, UNOMI WILL NOT ALLOW YOU TO USE REST API TO POST ANYTHING! 
            'Authorization': 'Basic a2FyYWY6a2FyYWY=',
            'Access-Control-Allow-Origin': *,
            'Content-Type': 'application/json',
          },

        });

        const profileSent = {
          "itemId": generateUUID(),
          "itemType": "profile",
          "version": 1,
          "properties": {
            "nbOfVisits": 1,
            "lastVisit": new Date(),
            "firstVisit": new Date(),
            "body": profileData
          },
          "systemProperties": {
            "lastUpdated": new Date()
          },
          "segments": ["Hello", "World"],
          "scores": {},
          "consents": {
            "mark1_test": {
              "scope": "string",
              "typeIdentifier": "string",
              "status": "GRANTED",
              "statusDate": new Date(),
              "revokeDate": new Date(),
              "consentGrantedNow": true
            }
          }
        }

        const response = await httpClient.post('/profiles', profileSent);

        if (response.status === 201 || response.status === 200) {
          res.send(`[SUCCESS] - PID: ${profileSent.itemId}`);
          console.log(`[SUCCESS] - PID: ${profileSent.itemId}`);
        }
        else {
          res.send(`[ERROR] - [48] - Profile creation failed: ${response.statusText}`);
          console.error(`[ERROR] - [48] - Profile creation failed: ${response.statusText}`);
        }
      }
      catch (error) {
        res.send(`[ERROR] - [53] - Error creating profile: ${error.message}`);
        console.error(`[ERROR] - [53] - Error creating profile: ${error.message}`);
      }
    }
    else {
      res.send({
        message: "No message found in the request!",
      });
      console.error("No message found in the request!");
    }
  });
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
