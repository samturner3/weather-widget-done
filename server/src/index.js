/* eslint-disable no-console */
const app = require('./app');
const handleListen = require('./handleListen');

const port = process.env.PORT || 5000;

app.listen(port, handleListen(console.log, port));
