var gulp = require('gulp'),
  ghPages = require('gulp-gh-pages'),
  shell = require('gulp-shell');


gulp.task('default', ['start']);

gulp.task('start', shell.task([
  "webpack-dev-server --hot --progress --colors"
]));

gulp.task('build', shell.task([
  "rm -rf ./build",
  "webpack --progress --colors --config webpack.dist.config.js",
  "cp index.html build/index.html"
]));

gulp.task('deploy', ['build'], function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});
