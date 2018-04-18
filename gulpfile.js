var gulp = require('gulp');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var scss = require('gulp-scss');

gulp.task('default', ['watch']);

gulp.task('build-css', function(){
  //Create an unminified version
  var full = gulp.src([
   'node_modules/normalize.css/normalize.css',
    'src/scss/main.scss'
  ])
  . pipe(scss())
  . pipe(concat('main.css'))
  . pipe(gulp.dest('dist/css'));

  //Create a minified version
  var min = gulp.src([
    'node_modules/normalize.css/normalize.css',
    'src/scss/main.scss'
  ])
  . pipe(scss())
  . pipe(cleanCSS())
  . pipe(concat('main.min.css'))
  . pipe(gulp.dest('dist/css'));

  return merge(full, min);
});
gulp.task('build-js', function(){
  //Create an unminified version
  var full = gulp.src([
    'src/js/main.js'
  ])
  
  . pipe(concat('main.js'))
  . pipe(gulp.dest('dist/js'));

  //Create a minified version
  var min = gulp.src([
    'src/js/main.js'
  ])
   
  
  . pipe(concat('main.min.js'))
  . pipe(uglify())
  . pipe(gulp.dest('dist/js'));

  return merge(full, min);
});
gulp.task('watch', function(){
  gulp.watch('./src/scss/**/*.scss', ['build-css']);
  gulp.watch('./src/js/**/*.js', ['build-js']);
});