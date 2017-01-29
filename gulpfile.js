var gulp = require('gulp'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  uglify = require('gulp-uglify'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  del = require('del');

gulp.task('jshint', function() {
  return gulp.src(['./app/js/index.js', './app/js/analytics.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('default', ['clean'], function() {
  gulp.start(['usemin']);
});

gulp.task('usemin', ['jshint'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifycss(), rev()],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('./'));
});
