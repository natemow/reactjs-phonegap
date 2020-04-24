/* eslint-env node */

// -----------------------------------------------------------------------------
//   Cleans /build before building
// -----------------------------------------------------------------------------
import gulp from 'gulp';
import del from 'del';
import log from 'fancy-log';
import colors from 'ansi-colors';
import config from './../gulp-config';

const pathsToClean = [
  'build'
];

gulp.task('clean', () => del(pathsToClean, { 'force': true }).then(() => {
  log('[' + colors.blue('clean') + '] ' + colors.green('Compiled output cleaned...'));
}));
