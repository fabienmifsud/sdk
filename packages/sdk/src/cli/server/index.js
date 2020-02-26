const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const path = require('path');

const { DEFAULT_PORT } = require('../constants');
const action = require('./services/action');
const config = require('./services/config');
const serveFiles = require('./services/static');

module.exports = ({ port = DEFAULT_PORT } = {}) => {
  const server = express();

  server.use(bodyParser.json({
    limit: '50mb',
  }));

  if (process.env.SAAGIE_ENV !== 'development') {
    server.use('/', serveStatic(path.resolve(__dirname, '../../../build-webapp')));
  } else {
    server.get('/', (req, res) => res.redirect('http://localhost:3000'));
  }

  server.get('/api/config', config);
  server.post('/api/action', action);
  server.get('/api/static', serveFiles);

  server.listen(port);

  return { port };
};