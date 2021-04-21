import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';

import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../', '.env')});

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import LocationApp from '../client/location-service/Components/App.js';

const ssr = async (req, res) => {
  try {
    const { id } = req.params;
    const sheet = new ServerStyleSheet();

    const fetchRes = await fetch(`${process.env.TRANSIT}/${id}`);
    const json = await fetchRes.json();
    const transitOptions = json.nearbyTransitOptions;

    const app = ReactDOMServer.renderToString(sheet.collectStyles(<LocationApp initialTransitOptions={transitOptions} />));
    const styles = sheet.getStyleTags();
    const indexFile = path.resolve('./public/index.html');
    fs.readFile(indexFile, 'utf8', (err, html) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Something went wrong');
      }

      html = html.replace('<div id="location-service"></div>', `<div id="location-service">${app}</div>`);
      html = html.replace('<style id="location-service-style"></style>', styles);
      return res.send(html);
    });
  } catch (error) {
    console.log(error);
  }
};

export default ssr;
