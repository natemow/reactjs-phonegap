/* eslint-env node */
/* eslint-disable no-unused-vars, no-console */

// -----------------------------------------------------------------------------
//   Load Gulp
// -----------------------------------------------------------------------------
import gulp from 'gulp';
import fs from 'fs';
import log from 'fancy-log';
import colors from 'ansi-colors';
const $ = require('gulp-load-plugins')();


// -----------------------------------------------------------------------------
//   Load Gulp Config File
// -----------------------------------------------------------------------------
import config from './gulp-config';


// -----------------------------------------------------------------------------
//   Make sure we have an .env file or variables are set for deployments
// -----------------------------------------------------------------------------
if (typeof process.env.ENVIRONMENT === 'undefined' || !process.env.ENVIRONMENT) {
  log.error('\n\n[' + colors.red('ERROR') + '] No .env file found! If this is an automated deployment, ensure proper environment variables are set!\n');
  process.exit(1);
}


// -----------------------------------------------------------------------------
//   Create a BrowserSync Instance
// -----------------------------------------------------------------------------
const browserSync = require('browser-sync').create('Local Server');


// -----------------------------------------------------------------------------
//   Gets all of our tasks
// -----------------------------------------------------------------------------
require('require-dir')('./tasks');


// -----------------------------------------------------------------------------
//   Task: Build
// -----------------------------------------------------------------------------
gulp.task('build', gulp.series('clean', gulp.parallel('sass', 'assets'), 'build:phonegap'));

// -----------------------------------------------------------------------------
//   Task: Serve
// -----------------------------------------------------------------------------
gulp.task('serve', gulp.series('clean', 'watch'));


// -----------------------------------------------------------------------------
//   Don't run `gulp` directly anymore
// -----------------------------------------------------------------------------
gulp.task('default', (done) => {
  log.error('\n\n[' + colors.red('ERROR') + '] This is not the proper way to run gulp. Please run ' + colors.green('"yarn serve"') + ' instead.\n');
  done();
  process.exit(1);
});
