var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
  gulp.src('assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'));
});
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "localhost"
//     });
// });
gulp.task('browser-sync', function() {
    browserSync.init(["**/*.php", "assets/css/*.css", "assets/js/*.js"], {
		proxy: "localhost"
        // server: {
        //     baseDir: "./"
        // }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("assets/scss/*.scss", ['sass']);
});