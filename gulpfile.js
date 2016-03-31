var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create();

    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var del = require('del');



gulp.task('default', ['serve']);

gulp.task('serve', ['inject'], function() {
    browserSync.init({
        // proxy: 'localhost',
        port: 3002,
        server: {
          baseDir: './'
        },
        notify: false,
        open: false
    });

    gulp.watch(['src/index.html'], browserSync.reload);
    gulp.watch(['src/**/*', 'src/*.js'], ['inject'], browserSync.stream);
});


gulp.task('inject', function() {
  gulp.src('src/index.html')
      .pipe(wiredep({}))
      .pipe(inject(gulp.src(['src/*.js', 'src/**/*.js'], {read: false})))
      .pipe(inject(gulp.src(['src/*.css', 'src/**/*.css'], {read: false})))
      .pipe(gulp.dest('src'));
});
