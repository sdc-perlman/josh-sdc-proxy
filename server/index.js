const nr = require('newrelic');
const path = require('path');
const express = require('express');
const request = require('request');
const get = require('./controllers.js');

const app = express();

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/buildings/:workspaceId', express.static(path.join(__dirname, '../client/dist')));

app.get('/workspace-api/workspace/:id', get.workspace);
app.get('/amenities-api/amenity/:id', get.amenities);
app.get('/api/workspace-description/:id', get.description);
app.get('/api/photos/:id', get.photos);
app.get('/api/photos/workspace/:id', get.photosByWorkspace);
app.get('/api/availability', get.availability);
app.get('/api/getNearbyTransitOptions/:id', get.transit);
app.get('/api/nearbyworkspaces/buildings/:id', get.nearbyBuildings);
app.get('/api/nearbyworkspaces/address/:id', get.address);
app.get('/api/reviews/all/:id', get.reviews);
app.get('/api/reviews/info/:id', get.reviewInfo);

// Port 6000 is insecure for chrome, otherwise I would use 6000
const port = process.env.PORT ? process.env.PORT : 6002;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

