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

gulp.task('calculator', () => gulp.src(['./public/js/calculator.js'])
  .pipe(concat('calculator.js'))
  .pipe(minify())
  .pipe(gulp.dest('public/build/js')));

gulp.task('weapon', () => gulp.src(['./public/js/weapon.js'])
  .pipe(concat('weapon.js'))
  .pipe(minify())
  .pipe(gulp.dest('public/build/js')));

gulp.task('character', () => gulp.src(['./public/js/character.js'])
  .pipe(concat('character.js'))
  .pipe(minify())
  .pipe(gulp.dest('public/build/js')));

gulp.task('stats', () => gulp.src(['./public/js/stats.js'])
  .pipe(concat('stats.js'))
  .pipe(minify())
  .pipe(gulp.dest('public/build/js')));

gulp.task('default', gulp.series(['vendor', 'contracts', 'library', 'core', 'calculator', 'weapon', 'character', 'stats']));
