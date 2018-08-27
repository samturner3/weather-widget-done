const requestPromise = require('request-promise');
const fs = require('fs');
const download = require('image-downloader');

require('dotenv').config({ silent: true });

const to = require('./utils/to');

const apiKey = process.env.OPEN_WEATHER_MAP_KEY;

module.exports = {

  downloadIMG: async (imgUrl, fileName) => {
    try {
      await download.image({
        url: imgUrl,
        dest: `public/backgroundImages/${fileName}.jpg`
      });
    }
    catch (e) {
      console.log(e);
    }
  },

  fetchWeather: async (req, res) => {
    const {
      lat,
      lng,
      backgroundURL,
      placeID
    } = req.body;

    if (lat && lng) {
      const weatherDataCache = req.app.get('weatherDataCache');

      let response = {
        fromCache: false
      };

      // First check if data for supplied lat+lng is in cache
      weatherDataCache.get(`${lat}+${lng}`, async function(err0, value) {
        if (!err0) {
          if (value === undefined) { // If nothing in cache (or expired), fetch data from API
            await Promise.all(
              ['weather', 'forecast'].map(
                async (dataType) => {
                  const [err1, returnedData] = await to(requestPromise({
                    uri: `https://api.openweathermap.org/data/2.5/${dataType}?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`,
                    headers: {
                      'User-Agent': 'Request-Promise'
                    },
                    json: true
                  }));
                  if (err1) {
                    res.status(500).send(`Problem with API ${err1}`);
                  }

                  response[`${dataType}`] = returnedData;
                }
              )
            );


            // Fetch Background Image
            if (backgroundURL) {
              const fileName = `${placeID}`;
              await module.exports.downloadIMG(backgroundURL, fileName);
            }

            // Save fetched data for lat+lng in cache for 15 min expiry.
            await weatherDataCache.set(`${lat}+${lng}`, { ...response, fromCache: true}, 900, function(err2, success) {
              if (!err2 && success) {
                console.log(`weatherData cache saved ${lat}+${lng}`);
              }
            });
          }
          else { // Data was found in cache'
            console.log(`weatherData cache data found ${req.body.lat}+${req.body.lng}`);
            response = value;
            if (req.body.backgroundURL !== null) {
              // Check background image exists for location
              if (!fs.existsSync(`public/backgroundImages/${placeID}.jpg`)) {
                const fileName = `${placeID}`;
                await module.exports.downloadIMG(backgroundURL, fileName);
              }
            }
          }
          res.send(response);
        }
        else {
          res.send(`Problem with cache ${err0}`, 500);
        }
      });

    }
    else {
      res.status(500).send('Bad data given');
    }
  }
};
