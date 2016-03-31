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


    // gulp.watch('src/index.html',function (file) {
    //   gulp.run('inject');
    //   browserSync.reload();
    // });

    gulp.watch(['src/index.html'], browserSync.reload);
    gulp.watch(['src/*.js'], ['inject'], browserSync.stream);

            // livereload.changed(file.path);
            // gutil.log(gutil.colors.yellow('JS changed' + ' (' + file.path + ')'));
    // gulp.watch('src/index.html', ['inject'] ,browserSync.reload);
    // gulp.watch(['src/index.html']).on('change', browserSync.reload);
    // gulp.watch('/{app,components,styles}/**/*.less', ['styles'], browserSync.stream);
    // gulp.watch('src/*.*', ['copy-files', 'inject']);
    //
    // gulp.watch(['dest/index.html']).on('change', browserSync.reload);
    // gulp.watch(['dest/*.js'], browserSync.stream);

    // gulp.watch(['src/index.html']).on('change', browserSync.reload);
    // gulp.watch(['src/index.html']).on('change', browserSync.reload);
});


gulp.task('inject', function() {
  gulp.src('src/index.html')
      .pipe(wiredep({}))
      .pipe(inject(gulp.src(['src/*.js'], {read: false})))
      .pipe(inject(gulp.src(['src/*.css'], {read: false})))
      .pipe(gulp.dest('src'));
});
//
// gulp.task('inject-vendor', function() {
//     gulp.src('src/index.html')
//         .pipe(wiredep({}))
//         .pipe(gulp.dest('dest'));
// });
//
//
// gulp.task('inject-own', ['scripts', 'styles'], function() {
//     gulp.src('src/index.html')
//         .pipe(inject(gulp.src('dest/js/*.js', {read: false})))
//         .pipe(inject(gulp.src('./dest/css/*.css', {read: false})))
//         .pipe(gulp.dest('dest'));
// });
//
//
// gulp.task('clean', function() {
//    return del(['dest/*.*', 'dest/**']);
// })
//
// gulp.task('scripts', function() {
//   return gulp.src("src/*.js")
//   // .pipe(uglify())
//   .pipe(gulp.dest('dest/js'));
//
// })
// gulp.task('styles', function() {
//   return gulp.src('src/*.css')
//   // .pipe(uglify())
//   .pipe(gulp.dest('dest/css'));
//
// })
