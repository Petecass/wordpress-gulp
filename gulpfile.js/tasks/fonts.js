var   gulp = require('gulp'),
         $ = require('../gulpconfig').fonts;

gulp.task('moveFonts', function(){
  return gulp.src($.src)
             .pipe(gulp.dest($.build));
});

gulp.task('moveFonts-dest', ['moveFonts'], function(){
  return gulp.src($.build + '**.**')
             .pipe(gulp.dest($.dist))
});
