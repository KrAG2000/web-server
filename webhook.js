const axios = require('axios');
const path = require('path');
const express = require('express');
// const unomiUrl = 'http://localhost:8181/cxs';
const unomiUrl = 'http://dxp-core.oslabs.app/cxs';

const port = process.env.PORT || 9999;

const app = express();
app.use(express.static(path.join(__dirname, '/')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/webhook', async (req, res) => {
  console.log("----------------START----------------");

  req.on('data', async (data) => {
    if (data && data !== '') {
      console.log("[SUCCESS] - JSON api is working fine!");

      const parsedData = JSON.parse(data);
      console.log(JSON.stringify(parsedData, undefined, 2));

      // const profileData = {"main": parsedData};
      try {
        const httpClient = axios.create({
          baseURL: unomiUrl,
          headers: {
            // BELOW LINE IS VERY IMPORTANT AS WITHOUT AUTHENTICATION, UNOMI WILL NOT ALLOW YOU TO USE REST API TO POST ANYTHING! 
            'Authorization': 'Basic a2FyYWY6a2FyYWY=',
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
          }
        });

        let profileSent = {};
        let response = await httpClient.get(`/profiles/${parsedData["unique_identifier"]}`);
        if (response) {
          profileSent = {
            "itemId": parsedData["unique_identifier"],
            "itemType": "profile",
            "version": 1,
            "properties": {
              "nbOfVisits": parseInt(response['sessions']) + 1,
              "lastVisit": new Date(),
              "firstVisit": response['signed up'],
              "body": parsedData
            },
            "systemProperties": {
              "lastUpdated": new Date()
            },
            "segments": ["Segment", "Test"],
            "scores": {},
            "consents": {
              "mark3_test": {
                "scope": "apache",
                "typeIdentifier": "string",
                "status": "GRANTED",
                "statusDate": new Date(),
                "revokeDate": new Date(),
                "consentGrantedNow": true
              }
            }
          }
        }
        else {
          profileSent = {
            "itemId": parsedData["unique_identifier"],
            "itemType": "profile",
            "version": 1,
            "properties": {
              "nbOfVisits": 1,
              "lastVisit": new Date(),
              "firstVisit": new Date(),
              "body": parsedData
            },
            "systemProperties": {
              "lastUpdated": new Date()
            },
            "segments": ["Segment", "Test"],
            "scores": {},
            "consents": {
              "mark3_test": {
                "scope": "apache",
                "typeIdentifier": "string",
                "status": "GRANTED",
                "statusDate": new Date(),
                "revokeDate": new Date(),
                "consentGrantedNow": true
              }
            }
          }
        }

        response = await httpClient.post('/profiles', profileSent);

        if (response.status === 201 || response.status === 200) {
          res.send(`[SUCCESS] - PID: ${profileSent.itemId}`);
          console.log(`[SUCCESS] - PID: ${profileSent.itemId}`);
        }
        else {
          res.send(`[ERROR] - [82] - Profile creation failed: ${response.statusText}`);
          console.error(`[ERROR] - [82] - Profile creation failed: ${response.statusText}`);
        }

        res.send("[SUCCESS] - Everything is good!");

      }
      catch (error) {
        res.send(`[ERROR] - [92] - Error creating profile: ${error.message}`);
        console.error(`[ERROR] - [92] - Error creating profile: ${error.message}`);
      }
    }
    else {
      res.send({
        message: "No message found in the request!",
      });
      console.error("No message found in the request!");
    }
  });

  console.log("----------------END----------------");
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
