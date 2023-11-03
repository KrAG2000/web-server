const express = require('express');
const request = require('request');
const cors = require('cors');

const PORT = process.env.PORT || 9999;
const app = express();

const Joi = require('joi');

const schema = Joi.object({
  'messenger user id': Joi.string().required(),
  'first name': Joi.string().required(),
  'last name': Joi.string().required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  'profile pic url': Joi.string().uri().required(),
  timezone: Joi.string().required(),
  locale: Joi.string().required(),
  source: Joi.string().required(),
  'last seen': Joi.date().required(),
  'signed up': Joi.date().required(),
  sessions: Joi.array().items({
    id: Joi.string().required(),
    startedAt: Joi.date().required(),
    endedAt: Joi.date().required(),
  }),
  'last visited block name': Joi.string().required(),
  'last visited block id': Joi.string().required(),
  'last clicked button name': Joi.string().required(),
});

app.use(cors({
  // methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  origin: '*'
}));

app.post('/webhook', async (req, res) => {
  const profileData = req.body;
  // Validate the data against the schema
  const validationResult = await schema.validate(profileData);

  if (validationResult.error) {
    // The data is invalid.
    res.status(400).send(validationResult.error.details);
  } else {
    const response = await request.post('http://localhost:8181/cxs/profiles', {
    // const response = await request.post('http://localhost:9999/datum', {
      json: true,
      body: {
        mainData: profileData,
        intent: 'example_intent',
      },
    });

    if (response.statusCode >= 200 && response.statusCode < 400) {
      res.send('Success: Data sent to Unomi server!');
    } else {
      res.status(500).send('Error sending data to Unomi server.');
    }
  }
  // }
});

app.get('/', (req, res) => {
  if (req) {
    const data = req.body;
    console.log(data);
  }
  else {
    res.send("No data from response!");
    console.log("No data from response!");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
