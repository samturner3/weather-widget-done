/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const NodeCache = require('node-cache');

const weather = require('./weather');
const cacheLookup = require('./cacheLookup');

const app = express();

app.set('weatherDataCache', new NodeCache());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
require('dotenv').config({ silent: true });


app.use(express.static('public'));

app.get('/api/cachelookup', cacheLookup);
app.post('/api/weather', weather.fetchWeather);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

module.exports = app;
