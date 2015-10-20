

var        gulp = require('gulp'),
         concat = require('gulp-concat'),
         uglify = require('gulp-uglify'),
        plumber = require('gulp-plumber'),
     sourcemaps = require('gulp-sourcemaps'),
         notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
              $ = require('../gulpconfig').js;

var errorHandler = function (errTitle) {
                      return plumber({
                        errorHandler: notify.onError({
                          // Customizing error title
                          title: errTitle || "Error running Gulp",
                          message: "Error: <%= error.message %>",
                        })
                      });
                    }

gulp.task('concatScripts', function(){

  return gulp.src($.src)
             .pipe(errorHandler($.errorMessage))
             .pipe(sourcemaps.init())
             .pipe(concat('app.js'))
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest($.build))
});

gulp.task('jsReload', ['concatScripts'], browserSync.reload );

gulp.task('minifyScript', ['concatScripts'], function(){
  return gulp.src($.build + 'app.js')
             .pipe(errorHandler($.errorMessage))
             .pipe(uglify())
             .pipe(gulp.dest($.dist))
});
