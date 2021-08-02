const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();

// config
const config = require('./config/config');

// database config
// const db = require('./config/db');

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

// disable caching
app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

app.use(logger(config.isProd ? 'combined' : 'dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'public', 'favicon/favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// bootstrap routes
require('./app/routes')(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message; // eslint-disable-line no-param-reassign
  res.locals.error = config.isDev ? err : {}; // eslint-disable-line no-param-reassign
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const httpServer = http.createServer(app);
const httpPort = process.env.HTTP_PORT || 3000;
httpServer.listen(httpPort, () => {
  console.log(`HTTP Server running on port ${httpPort}`);
});

if (process.env.NODE_ENV === 'production') {
  const credentials = {
    cert: fs.readFileSync('/etc/cert/cert.pem', 'utf8'),
    key: fs.readFileSync('/etc/cert/key.pem', 'utf8'),
  };
  const httpsServer = https.createServer(credentials, app);
  const httpsPort = process.env.HTTPS_PORT || 3001;
  httpsServer.listen(httpsPort, () => {
    console.log(`HTTPS Server running on port ${httpsPort}`);
  });
}

module.exports = app;
