var      gulp = require('gulp'),
     imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync'),
            $ = require('../gulpconfig').images;



gulp.task('moveImages', function(){
 return gulp.src($.src + $.fileType)
            .pipe(gulp.dest($.build));
});

gulp.task('reloadMoveImages', ['moveImages'], browserSync.reload);

gulp.task('optimImages', ['moveImages'], function(){
  return gulp.src($.build + $.fileType)
             .pipe(imagemin())
             .pipe(gulp.dest($.dist));
});
