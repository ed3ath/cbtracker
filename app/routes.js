/* eslint-disable global-require, func-names */

module.exports = function (app) {
  // home
  app.use('/', require('./controllers/home'));
};
