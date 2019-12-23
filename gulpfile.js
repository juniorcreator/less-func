let gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
  return gulp.watch('less/**/*.less', gulp.series('less'));
});