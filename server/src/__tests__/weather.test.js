const request = require('./test-setup');

const requestData = {
  lat: -33.8688197,
  lng: 151.20929550000005,
  backgroundURL: 'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRZAAAAJSnU1nVwVJvR7fjNMYkXx8braZEX2VswHWm9rCFMayQnLvUc5oSksoIh7aqzuLr7x6SlXIly6T5BqGpsC-XnWtZ2aksY8ohQvXhnGz65JBBH4HvbCtv6Zs8o5eEfqOqLEhB5EZ84dGy2GIRrAM830KUrGhQhyIr5k9WIXEzv3Q6tCjIP_dT_FA&3u1000&4u1000&5m1&2e1&callback=none&key=AIzaSyAJ2S0FDk4iilREK5rwAZ8sGzt3QUXrKQw&token=69345',
  placeID: 'ChIJP5iLHkCuEmsRwMwyFmh9AQU'
};

describe('Fetch weather', () => {

  it('should reject request if lat and lng are not provided', (done) => {
    request.post('/api/weather')
      .send({})
      .end((err, res) => {
        expect(res.statusCode).toBe(500);
        expect(res.text).toBe('Bad data given');
        done();
      });
  });

  it('should make a new request to return the weather and forecast data', (done) => {
    request.post('/api/weather')
      .send(requestData)
      .end((err, res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.weather).toBeDefined();
        expect(res.body.forecast).toBeDefined();
        expect(res.body.fromCache).toBe(false);
        done();
      });
  });

  it('should return the weather and forecast data from cache', (done) => {
    request.post('/api/weather')
      .send(requestData)
      .end((err, res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.weather).toBeDefined();
        expect(res.body.forecast).toBeDefined();
        expect(res.body.fromCache).toBe(true);
        done();
      });
  });
});
