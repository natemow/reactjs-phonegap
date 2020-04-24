/* eslint-env node */

// -----------------------------------------------------------------------------
//   Copies assets from /src to /dist
// -----------------------------------------------------------------------------
import gulp from 'gulp';
import config from './../gulp-config';
const $ = require('gulp-load-plugins')();

const browserSync = require('browser-sync').get('Local Server');

function copyAssets(type) {

  let destination = 'public/static/' + type + '/';
  if (type === 'docroot') {
    destination = 'public/';

    gulp.src('src/*.html')
      .pipe(gulp.dest(destination));
  }

  return gulp.src('src/assets/' + type + '/**/*')
    .pipe($.plumber({
      errorHandler: config.reportError
    }))
    .pipe(gulp.dest(destination))
    .on('end', browserSync.reload)
  ;
}

gulp.task('assets:docroot', () => copyAssets('docroot'));
gulp.task('assets:fonts', () => copyAssets('fonts'));
gulp.task('assets:images', () => copyAssets('images'));
gulp.task('assets:js', () => copyAssets('js'));

gulp.task('assets', gulp.parallel('assets:docroot', 'assets:fonts', 'assets:images', 'assets:js'));
