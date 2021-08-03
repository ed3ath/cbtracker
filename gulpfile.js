const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('vendor', () => gulp.src(['./public/js/vendor/*.js'])
  .pipe(concat('vendor.js'))
  .pipe(minify())
  .pipe(gulp.dest('public/build/js')));

gulp.task('contracts', () => gulp.src(['./public/contracts/*.js'])
  .pipe(concat('contracts.js'))
  .pipe(minify())
  .pipe(gulp.dest('public/build/js')));

gulp.task('library', () => gulp.src(['./public/js/library.js', './public/js/utils.js'])
  .pipe(concat('library.js'))
  .pipe(minify())
  .pipe(gulp.dest('public/build/js')));

gulp.task('core', () => gulp.src(['./public/js/core.js'])
  .pipe(concat('core.js'))
  .pipe(minify())
  .pipe(gulp.dest('public/build/js')));

gulp.task('fight', () => gulp.src(['./public/js/fight-logger.js'])
  .pipe(concat('fight.js'))
  .pipe(minify())
  .pipe(gulp.dest('public/build/js')));

gulp.task('calculator', () => gulp.src(['./public/js/calculator.js'])
  .pipe(concat('calculator.js'))
  .pipe(minify())
  .pipe(gulp.dest('public/build/js')));

gulp.task('default', gulp.series(['vendor', 'contracts', 'library', 'core', 'fight', 'calculator']));
