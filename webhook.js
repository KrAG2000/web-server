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

        // Extract profile information from JSON object
        const profileData = {
          "messenger user id": "1211345334",
          "first name": "Mark",
          "last name": "Anderson",
          "gender": "Male",
          "profile pic url": "/home/osl/index.jpg",
          "timezone": "GMT +5:30",
          "locale": "locale",
          "source": "source",
          "last seen": "2 days ago",
          "signed up": "signed up",
          "last visited block name": "last visited block name",
          "last visited block id": "last visited block id",
          "last clicked button name": "last clicked button name"
        }

        try {
          // Create an HTTP client
          const httpClient = axios.create({
            baseURL: unomiUrl,
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const profileRequest = {
            itemId: new Date(year,month,day,hours,minutes,seconds,ms),
            itemType: 'profile',
            properties: profileData,
          };

          const response = await httpClient.post('/profiles', profileRequest);

          if (response.status === 201) {
            console.log('Profile created successfully');
            const profileId = response.data.itemId;
            console.log('Profile ID:', profileId);

          } else {
            console.error('Profile creation failed:', response.statusText);
          }
        } catch (error) {
          console.error('Error creating profile:', error.message);
        }

        res.send(profileData);

        for (const key in parsedData) {
          console.log(key, '----------', parsedData[key]);
        }
        console.log(parsedData);
      } else {
        res.send({
          message: 'No message has been received!',
        });
        console.error('[ ERROR ] - [204] - Message is empty!');
      }
    });

    console.error('[ ERROR ] - [204] - Message is empty!');

    console.log("----------------END----------------");
  });

  app.listen(port, () => {
    console.log(`[ INFO ] - [200] - Listening to ${port} server successful!`);
  });
