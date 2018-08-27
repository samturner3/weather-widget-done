# weather-widget

## Features
Returns the time & current/forecast weather for a given location.

The location lookup is handled by the Google places API.

The weather data is fetched by https://openweathermap.org/

Includes caching of weather data. Once the server fetches from OpenWeatherMap API, it is saved with an expiry set for 15min.
If another request for the same place is performed within this time, the cached data is returned.

The background image is also cached on the server, however a better solution ie https://cloudinary.com/ sould be considered before deployment.

## Architecture diagram

![Architecture diagram](https://image.ibb.co/cHJVf9/Architecture_diagram.png "Architecture diagram")
![Screen Shot 1](https://image.ibb.co/hv6cSp/Screen_Shot_2018_08_27_at_1_30_05_pm.png "Screen Shot 1")
![Screen Shot 2](https://image.ibb.co/jhGBnp/Screen_Shot_2028_08_27_at_1_32_00_pm.png "Screen Shot 2")

## Quick Start

There are 2 main sections, client and server. npm install each first. (This will run the app locally).

```
cd client
npm install
```

#### Then Server

```
cd server
npm install
```

### Running app

This command will launch both the server and client.

```
cd server
npm run dev
```

## Tests

#### Run tests for client:

```
cd client
npm run test
```

#### Run tests for client:

```
cd server
npm run test
```
# Documentation

### Server end-points

There are two end-points the server makes available to the client.

`api/weather`
Returns the forecast and current weather for the passed place.

`api/cachelookup`
Returns a list of currently cached locations and the associated weather data.

## (Some of the) Used online resources

https://daveceddia.com/create-react-app-express-backend/
https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

https://jestjs.io/

https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
https://stackoverflow.com/questions/14487809/how-to-mock-request-and-response-in-nodejs-to-test-middleware-controllers
https://stackoverflow.com/questions/28053206/node-express-testing-mock-res-statusstatus-jsonobj

https://www.terlici.com/2015/09/21/node-express-controller-testing.html
https://mherman.org/blog/2016/12/23/building-a-restful-api-with-node-and-flow/#test-setup

https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02

## Comments

I thought this was a great task for a full-stack test. (Client with REST api) :thumbs_up:

Most of the project took me about a week to do, however implementing the tests took another full week.
I have done some react testing in the past but not so much on node. I found this the most challenging part of the project.
