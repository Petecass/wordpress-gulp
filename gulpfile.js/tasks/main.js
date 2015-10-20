
var        gulp = require('gulp'),
    runSequence = require('run-sequence');


gulp.task('default', function(cb){
  runSequence(
          'clean',
          'watchFiles',
          cb);
});

gulp.task('build', function(cb){
  runSequence(
          'clean',
          ['minifyCss', 'minifyScript', 'optimImages', 'themeFiles-dist', 'moveFonts-dest'],
          cb);

});
