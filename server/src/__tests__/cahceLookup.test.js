const request = require('./test-setup');
const app = require('../app');
const forecastMock = require('./__mocks__/forecastMock');
const weatherMock = require('./__mocks__/weatherMock');

const coord = {
  lat: 6.5243793,
  lng: 3.379205700000057
};
const cacheItemExp = 20;
const cacheItem = {
  weather: weatherMock,
  forecast: forecastMock,
  fromCache: true
};

describe('Cahce Lookup', () => {
  it('should return an empty array if there no items in the cahce', (done) => {
    request.get('/api/cacheLookup')
      .end((err, res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.cache).toHaveLength(0);
        done();
      });
  });

  describe('when cache is not empty', () => {
    beforeEach(() => {
      const weatherDataCache = app.get('weatherDataCache');
      const { lat, lng } = coord;

      weatherDataCache.set(`${lat}+${lng}`, cacheItem, cacheItemExp);
    });

    it('should return an array of cache keys', (done) => {
      request.get('/api/cacheLookup')
        .end((err, res) => {
          const { lat, lng } = coord;
          const cachedKey = res.body.cache[0];
          const exp = Math.ceil((cachedKey.exp - Date.now()) / 1000);

          expect(res.statusCode).toBe(200);
          expect(res.body.cache).toHaveLength(1);
          expect(exp).toBe(cacheItemExp);
          expect(cachedKey.key).toBe(`${lat}+${lng}`);
          expect(cachedKey.name).toBe(weatherMock.name);
          done();
        });
    });
  });
});
