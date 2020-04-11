const gulp = require('gulp');
const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');
const cssnano = require('cssnano');

const plugins = [
  uncss({
    html: ['index.html']
  }),
  cssnano(),
];

const css = (cb) => {
  gulp.src('./css/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./css/'))

  cb();
}

exports.css = css;