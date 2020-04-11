const gulp = require('gulp');
const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');
const cssnano = require('cssnano');

const min = (cb) => {
  gulp.src('./css/*.css')
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest('./css/'))

  cb();
}

const opt = (cb) => {
  gulp.src('./css/*.css')
    .pipe(postcss([uncss({
      html: ['index.html']
    })]))
    .pipe(gulp.dest('./css/'))

  cb();
}

exports.min = min;
exports.opt = opt;