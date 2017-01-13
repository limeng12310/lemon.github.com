var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var gutil = require('gulp-util');
var config = require('./webpack/webpack.config');
var eslint = require('gulp-eslint');

gulp.task('server', function () {
  var watchPort = 3000;
  new WebpackDevServer(webpack(config), {
    noInfo: true,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) {
      return gutil.PluginError(err);
    }

    gutil.log("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", watchPort, watchPort);
  });
});

gulp.task('lint', function() {
  return gulp.src(
    [
      './src/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});