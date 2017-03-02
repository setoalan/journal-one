var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev');
  minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),

gulp.task('jshint', function() {
  return gulp.src(['./app/js/index.js', './app/js/analytics.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('usemin', ['jshint'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifycss(), rev()],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function() {
  gulp.start(['usemin']);
});
