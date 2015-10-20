var    gulp = require('gulp'),
browserSync = require('browser-sync'),
          $ = require('../gulpconfig').themeFiles;


gulp.task('moveThemeFiles', function(){

  return gulp.src([$.src + $.filesToMove, $.src + 'screenshot.png'])
             .pipe(gulp.dest($.build))
});

gulp.task('reloadThemeFiles', ['moveThemeFiles'], browserSync.reload);


gulp.task('themeFiles-dist', ['moveThemeFiles'], function(){
  return gulp.src([$.build + $.filesToMove, $.build + 'screenshot.png'])
             .pipe(gulp.dest($.dist))
});
