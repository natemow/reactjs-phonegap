/* eslint-env node */

// -----------------------------------------------------------------------------
//   Watch files for changes, execute tasks on change and stream into browser
// -----------------------------------------------------------------------------
//
//   NOTE:
//
//   The server option inside of browserSync is to use the built-in static
//   server. This is only useful for static HTML websites run locally on the
//   host machine. If you're using a VM (Docker, MAMP, Vagrant, etc.) or running
//   your own local server, comment out the 'server' option, and uncomment the proxy
//   option to wrap your vhost with a proxy URL to view your site.
//
//   For more information, consult the Browsersync docs.
//   https://www.browsersync.io/docs/options/
//
// -----------------------------------------------------------------------------
import gulp from 'gulp';
import config from './../gulp-config';

import log from 'fancy-log';
import colors from 'ansi-colors';
import fixme from 'fixme';

const browserSync = require('browser-sync').get('Local Server');

gulp.task('serve', (done) => {

  browserSync.init({
    open: false,
    logPrefix: 'BrowserSync',
    cors: true,
    server: {
      baseDir: 'public/',
      middleware(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    },
    callbacks: {
      ready() {
        /* eslint-disable */
        console.log('');
        console.log('');
        console.log(colors.bold.bgBlue('                                             '));
        console.log(colors.bold.bgBlue('                                             '));
        console.log(colors.bold.bgBlue('               ./~                           '));
        console.log(colors.bold.bgBlue('        (=#####{>==================-         '));
        console.log(colors.bold.bgBlue('               `\\_                           '));
        console.log(colors.bold.bgBlue('                                             '));
        console.log(colors.bold.bgBlue('                                             '));
        console.log(colors.bold.bgBlue('   Night gathers, and now my watch begins.   '));
        console.log(colors.bold.bgBlue('                                             '));
        console.log(colors.bold.bgBlue('                                             '));
        console.log('');
        fixme({
          path: 'src',
          file_patterns: ['**/*.js', '**/*.twig', '**/*.scss'],
          ignored_directories: ['node_modules/**', '.git/**', 'public/**'],
          file_encoding: 'utf8',
          line_length_limit: 9999,
          skip: ['note']
        });
        /* eslint-enable */
      }
    }
  });

  gulp.watch('src/**/*.scss', gulp.series('sass')).on('change', () => {
    log('[' + colors.blue('sass') + '] ' + colors.green('Compiling SCSS...'));
  });
  gulp.watch('src/*.html', gulp.series('assets:docroot'));
  gulp.watch('src/assets/docroot/**/*', gulp.series('assets:docroot'));
  gulp.watch('src/assets/images/**/*', gulp.series('assets:images'));
  gulp.watch('src/assets/fonts/**/*', gulp.series('assets:fonts'));

  done();
});

gulp.task('watch', gulp.series(['sass', 'assets'], 'serve'));
