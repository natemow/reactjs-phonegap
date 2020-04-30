import gulp from 'gulp';
var exec = require('child_process').exec;

gulp.task('build:phonegap', (done) => {

  const phonegapInit = '<script type=\\"text/javascript\\" src=\\"cordova.js\\"></script><script type=\\"text/javascript\\" src=\\"/static/js/phonegap.js\\"></script><script type=\\"text/javascript\\">app.initialize();</script>';

  const commands = `
    react-scripts build \
      && rm -rf ../www \
      && sed -i "s|</body>|` + phonegapInit + `</body>|g" ./build/index.html \
      && mv ./build ../www;
  `.trim();

  exec(commands, () => {
    done();
  });
});
