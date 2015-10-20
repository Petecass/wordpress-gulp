
var      gulp = require('gulp'),
  browsersync = require('browser-sync'),
        watch = require('gulp-watch'),
            $ = require('../gulpconfig');


gulp.task('watchFiles', ['compileSass', 'concatScripts', 'moveThemeFiles', 'moveFonts', 'moveImages' ], function () {

    browsersync.init($.browserSync);

    watch($.watch.sass, function () {
            gulp.start('compileSass');
    });
    watch($.watch.js, function () {
            gulp.start('jsReload');
    });
    watch($.watch.themeFiles, function () {
            gulp.start('reloadThemeFiles');
    });
    watch($.watch.images, function () {
            gulp.start('reloadMoveImages');
    });
    
});
