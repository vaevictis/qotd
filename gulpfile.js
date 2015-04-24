var gulp = require('gulp'),
  ghPages = require('gulp-gh-pages'),
  shell = require('gulp-shell');


gulp.task('default', ['start']);

gulp.task('start', shell.task([
  "webpack-dev-server --hot --progress --colors"
]));

gulp.task('build', shell.task([
  "webpack --progress --colors --config webpack.dist.config.js"
]));

gulp.task('deploy', ['build'], function() {
  return gulp.src(['index.html', './build/**/*'])
    .pipe(ghPages());
});
