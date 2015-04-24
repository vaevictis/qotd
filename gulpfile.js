var gulp = require('gulp'),
  ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src(['index.html', './build/**/*'])
    .pipe(ghPages());
});
