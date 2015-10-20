var gulp = require('gulp');
     del = require('del');
       $ = require('../gulpconfig').clean;

gulp.task('clean', function() {
 return del($.deleteFolder);
});
