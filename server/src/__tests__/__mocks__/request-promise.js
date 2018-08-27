const requestPromise = require('request-promise');

jest.mock('request-promise', () => {
  const url = require('url');
  const forecastMock = require('./forecastMock');
  const weatherMock = require('./weatherMock');

  return (req) => {
    const { pathname } = url.parse(req.uri);

    if (pathname.includes('weather')) return Promise.resolve(weatherMock);
    if (pathname.includes('forecast')) return Promise.resolve(forecastMock);

    return Promise.reject(new Error('path not found'));
  };

});

module.exports = requestPromise;
