import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../client/location-service/Components/App.js';

const ssr = (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve('./public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Something went wrong');
    }

    return res.send(data.replace('<div id="location-service"></div>', `<div id="location-service">${app}</div>`));
  });
};

export default ssr;
