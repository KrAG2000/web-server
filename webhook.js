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

  req.on('data', async (data) => {
    if (data && data !== '') {
      console.log("[SUCCESS] - JSON api is working fine!");

      const parsedData = JSON.parse(data);
      console.log(JSON.stringify(parsedData, undefined, 2));

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


        // let profileSent = {};
        // const profile = await httpClient.get({
        //   index: `context-profile`,
        //   id: "mark1"
        // })
        //   // .then(p => p.body._source
        //   .then(p => p.body)
        //   .catch(() => {
        //     return { "Message": "PAKDA GAYA!" };
        //   });

        // console.log(profile);

        // let response = await httpClient.get(`/profiles/${parsedData["messenger user id"]}`);
        let response = await httpClient.get(`/profiles/mark72`);
        const responseData = JSON.parse(response);
        console.log(JSON.stringify(responseData, undefined, 2));

        // if (response) {
        profileSent = {
          // "itemId": parsedData["messenger user id"],
          "itemId": "mark72",
          "itemType": "profile",
          "version": 1,
          "properties": {
            "nbOfVisits": 1,
            "lastVisit": new Date(),
            "firstVisit": parsedData['signed up'],
            "firstName": parsedData.firstName,
          },
          "systemProperties": {
            "lastUpdated": new Date()
          },
          "segments": [],
          "scores": {},
          "consents": {}
        }
        // }
        // else {
        // profileSent = {
        //   "itemId": "mark72",
        //   "itemType": "profile",
        //   "version": 1,
        //   "properties": {
        //     // "nbOfVisits": 1,
        //     "nbOfVisits": parseInt(response['sessions']) + 1,
        //     "lastVisit": new Date(),
        //     "firstVisit": new Date(),
        //     "body": parsedData
        //   },
        //   "systemProperties": {
        //     "lastUpdated": new Date()
        //   },
        //   "segments": ["Segment", "Test"],
        //   "scores": {},
        //   "consents": {
        //     "mark3_test": {
        //       "scope": "apache",
        //       "typeIdentifier": "string",
        //       "status": "GRANTED",
        //       "statusDate": new Date(),
        //       "revokeDate": new Date(),
        //       "consentGrantedNow": true
        //     }
        //   }
        // }
        // }

        response = await httpClient.post('/profiles', profileSent);

        if (response.status === 201 || response.status === 200) {
          res.send(`[SUCCESS] - PID: ${profileSent.itemId}`);
          console.log(`[SUCCESS] - PID: ${profileSent.itemId}`);
          console.log("----------------END----------------");
        }
        else {
          res.send(`[ERROR] - [${response.status}] - Profile creation failed: ${response.statusText}`);
          console.error(`[ERROR] - [82] - Profile creation failed: ${response.statusText}`);
          console.log("----------------END----------------");
        }


        res.send("[SUCCESS] - Everything is good!");

      }
      catch (error) {
        res.send(`[ERROR] - [92] - Error creating profile: ${error.message}`);
        console.error(`[ERROR] - [92] - Error creating profile: ${error.message}`);
        console.log("----------------END----------------");
      }
    }
    else {
      res.send({
        message: "No message found in the request!",
      });
      console.error("No message found in the request!");
      console.log("----------------END----------------");
    }
  });

});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
