/* eslint-env node */

// -----------------------------------------------------------------------------
//   Compile Sass
// -----------------------------------------------------------------------------
import gulp from 'gulp';
import config from './../gulp-config';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import sass from 'gulp-sass';
sass.compiler = require('node-sass');
const $ = require('gulp-load-plugins')();

const browserSync = require('browser-sync').get('Local Server');

const postcssPlugins = [
  autoprefixer({
    cascade: false,
    grid: true
  })
];

if (config.isProd) {
  postcssPlugins.push(cssnano());
}

gulp.task('sass:lint', () => gulp.src('src/**/*.scss')
  .pipe($.plumber({
    errorHandler: config.reportError
  }))
  .pipe($.sassLint({
    configFile: '.sass-lint.yml'
  }))
  .pipe($.sassLint.format())
  .pipe($.sassLint.failOnError())
);

gulp.task('sass:compile', () => gulp.src('src/App.scss')
  .pipe($.cond(!config.isProd,
    $.sourcemaps.init({
      debug: true
    })
  ))
  .pipe($.plumber({
    errorHandler: config.reportError
  }))
  .pipe($.sassGlob({
    ignorePaths: [
      'static-only/**/*.scss'
    ]
  }))
  .pipe(sass({
    outputStyle: 'expanded',
    errLogToConsole: true,
    includePaths: ['node_modules/breakpoint-sass/stylesheets/']
  }))
  .on('error', config.reportError)
  .pipe($.postcss(postcssPlugins))
  .pipe($.rename('style.css'))
  .pipe($.cond(!config.isProd,
    $.sourcemaps.write('/sourcemaps')
  ))
  .pipe(gulp.dest('public/static/css/'))
  .pipe(browserSync.stream({match: '**/*.css'}))
);

gulp.task('sass', gulp.series('sass:lint', 'sass:compile'));
