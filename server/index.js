const path = require('path');
const express = require('express');
const request = require('request');

const app = express();

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/buildings/:workspaceId', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/availability', async (req, res) => {
  const { id } = req.query;
  const options = {
    'method': 'GET',
    'uri': `http://localhost:3001/api/availability?id=${id}`,
  };
  request(options, (error, res2, body) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
      return error;
    }
    res.json(JSON.parse(body));
  });
});

app.get('/workspace-api/workspace/:id', async (req, res) => {
  const { id } = req.params;
  const options = {
    'method': 'GET',
    'uri': `http://localhost:4000/workspace-api/workspace/${id}`,
  };
  request(options, (error, res2, body) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
      return error;
    }
    res.json(JSON.parse(body));
  });
});

app.get('/api/workspace-description/:id', async (req, res) => {
  const { id } = req.params;
  const options = {
    'method': 'GET',
    'uri': `http://localhost:6060/api/workspace-description/${id}`,
  };
  request(options, (error, res2, body) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
      return error;
    }
    res.json(JSON.parse(body));
  });
});

// Port 6000 is insecure for chrome, otherwise I would use 6000
const port = process.env.PORT ? process.env.PORT : 6002;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
