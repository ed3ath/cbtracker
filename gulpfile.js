const gulp = require('gulp');
const stylus = require('gulp-stylus');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');

const { reload } = browserSync;
const config = require('./config/config');

gulp.task('stylus', () => {
  gulp.src('./public/styl/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('watch', () => {
  gulp.watch('./public/styl/*.styl', ['stylus']);
});

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: `http://localhost:${config.server.port}`,
    files: ['public/**/*.*', '**.js'],
    browser: 'google chrome',
    port: 7000,
  });
});

gulp.task('nodemon', cb => nodemon({
  exec: 'node --inspect',
  script: 'app.js',
  ext: 'js pug',
  env: { NODE_ENV: 'development', DEBUG: 'myapp:*' },
})
  .once('start', cb)
  .on('restart', () => {
    setTimeout(() => {
      browserSync.reload({ stream: false });
    }, 1000);
  }));

gulp.task('default', [
  'stylus',
  'nodemon',
  'watch',
  'browser-sync',
]);
