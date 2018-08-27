require('dotenv').config({ silent: true });

module.exports = async (req, res) => {

  const weatherDataCache = req.app.get('weatherDataCache');

  const cachedKeys = [];

  weatherDataCache.keys(function(err0, mykeys) {
    if (!err0) {
      mykeys.forEach((key) => {
        weatherDataCache.get(key, function(err1, value) {

          if (!err1) {
            if (value === undefined) {
              // key not found
            }
            else {
              weatherDataCache.getTtl(key, function(err, ts) {
                if (!err) {
                  cachedKeys.push({
                    key,
                    name: value.weather.name,
                    exp: ts
                  });
                }
                else {
                  res.send(`Problem with cache lookup ${err}`, 500);
                }
              });
            }
          }
          else {
            res.send(`Problem with cache lookup ${err1}`, 500);
          }
        });

      });
      // console.info('server cache', cachedKeys);
      res.send({ cache: cachedKeys });
    }
  });
};
