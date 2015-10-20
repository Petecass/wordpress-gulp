
var        gulp = require('gulp'),
           sass = require('gulp-sass'),
           csso = require('gulp-csso'),
        plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),
     sourcemaps = require('gulp-sourcemaps'),
     autoprefix = require('gulp-autoprefixer'),
         notify = require('gulp-notify'),
              $ = require('../gulpconfig').sass;

var errorHandler = function (errTitle) {
                      return plumber({
                        errorHandler: notify.onError({
                          // Customizing error title
                          title: errTitle || "Error running Gulp",
                          message: "Error: <%= error.message %>",
                        })
                      });
                    }


gulp.task('compileSass', function(){
  return gulp.src($.src)
             .pipe(errorHandler($.errorMessage))
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(autoprefix($.autoprefix))
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest($.build))
             .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('minifyCss', ['compileSass'], function(){
        return gulp.src($.build + '*.css')
                  .pipe(csso())
                  .pipe(gulp.dest($.dist));

});
