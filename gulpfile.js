var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create();



gulp.task('default', [serve]);

gulp.task('serve', function() {
    browserSync.init({
        // proxy: 'localhost',
        // port: 3002,
        server: {
          baseDir: './src/index.html'
        },
        notify: false,
        open: false
    });

    // gulp.watch('/{app,components,styles}/**/*.less', ['styles'], browserSync.stream);
    gulp.watch(['src/index.html']).on('change', browserSync.reload);
});
