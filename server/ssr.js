import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from '../client/location-service/Components/App.js';

const ssr = (req, res) => {
  const sheet = new ServerStyleSheet();
  const app = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  const styles = sheet.getStyleTags();
  const indexFile = path.resolve('./public/index.html');
  fs.readFile(indexFile, 'utf8', (err, html) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Something went wrong');
    }

    html = html.replace('<div id="location-service"></div>', `<div id="location-service">${app}</div>`);
    html = html.replace('<style id="ssr"></style>', styles);
    return res.send(html);
  });
};

export default ssr;
