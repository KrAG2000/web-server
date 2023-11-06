// const express = require('express');
// const port = process.env.PORT || 9999;
// const app = express();


// app.post('/webhook', (req, res) => {
//   console.log("----------------START----------------");

//   req.on('data',(data) => {
//     if(data || data != "") {
//       const parsedData = JSON.parse(data);
//       console.log(parsedData);

//       let response = '';
//       for (const [key, value] of Object.entries(parsedData)) {
//         response += `${key}: ${value}, `;
//       }

//       res.send({
//         "message": response
//       });
//       for (const key in parsedData) {
//         console.log(key, " ---------- ", parsedData[key]);
//       }
//       console.log(parsedData);
//     }
//     else{
//       res.send({
//         "message": 'No message has been received!'
//       });
//       console.error("[ ERROR ] - [204] - Message is empty!");
//     }
//   })

//   console.error("[ ERROR ] - [204] - Message is empty!");

//   console.log("----------------END----------------");
// });

// app.listen(port, () => {
//   console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
// });


const axios = require('axios');
const unomiUrl = 'http://localhost:8181/cxs';
const express = require('express');
const port = process.env.PORT || 9999;
const app = express();

app.post('/webhook', async (req, res) => {
  console.log("----------------START----------------");

  req.on('data', async (data) => {
    if (data && data !== '') {
      const parsedData = JSON.parse(data);
      console.log(parsedData);

      const profileData = { "main": parsedData, "additionals": ["UUID", "SID", "PID", "TS"] };
      try {
        const httpClient = axios.create({
          baseURL: unomiUrl,
          headers: {
            'Authorization': 'Basic a2FyYWY6a2FyYWY=',
            'Content-Type': 'application/json',
          },

        });

        const profileRequest = {
          itemId: new Date(),
          itemType: 'profile',
          properties: profileData,
        };

        const response = await httpClient.post('/profiles', profileRequest);

        if (response.status === 201 || response.status === 200) {
          console.log(profileRequest);
          console.log(`Profile ID: ${profileRequest.itemId} created successfully`);
          res.send(`[SUCCESS] - PID: ${profileRequest.itemId}`);
        } else {
          console.error('Profile creation failed:', response.statusText);
          res.send("Profile creation failed!");
        }
      } catch (error) {
        console.error('Error creating profile:', error.message);
        res.send("Error creating profile!");
      }
    }
    else {
      res.send({
        message: 'No message has been received!',
      });
      console.error('[ ERROR ] - [204] - Message is empty!');
    }
  });
  console.log("----------------END----------------");
});

app.listen(port, () => {
  console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
});
