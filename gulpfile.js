var gulp = require('gulp');
var minifycss = require('gulp-minify-css');

gulp.task("minifycss", function() {
    gulp.src('./src/*.css')
        .pipe(minifycss({noAdvanced: true}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['minifycss']);