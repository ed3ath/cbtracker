// test environment
process.env.NODE_ENV = 'test';

const app = require('../app');
const request = require('supertest')(app);

describe('Example unit test', () => {
  before((done) => {
    app.on('appStarted', () => {
      done();
    });
  });
  after(() => {
    process.exit();
  });

  it('should return 404 page', (done) => {
    request
      .get('/random-url')
      .expect(404, done);
  });

  it('should return home page', (done) => {
    request
      .get('/')
      .expect(200, done);
  });
});
