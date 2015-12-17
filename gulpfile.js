const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const express = require('express');
const refresh = require('gulp-livereload');
const livereload = require('connect-livereload');
const livereloadport = 35729;
const serverport = 8080;

const server = express();
server.use(livereload({
  port: livereloadport
}));
server.use(express.static('./dist'));

gulp.task('browserify', () => {
  return browserify({
    debug: true,
    entries: './src/app/app.js'
  })
    .transform('babelify', {
      presets: ['es2015']
    })
    .transform('browserify-shim')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('vendors', () => {
  return gulp.src('./src/bower_components/**/*.*')
    .pipe(gulp.dest('./dist/bower_components/'));
});

gulp.task('css', () => {
  return gulp.src('./src/style/*.css')
    .pipe(gulp.dest('./dist/'));
})

gulp.task('static', () => {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  // server.listen(serverport, );
  // refresh.listen(livereloadport);
  // gulp.watch('./dist/**').on('change', refresh.changed);

  gulp.watch('src/**/*.js', ['browserify']);
  gulp.watch('src/**/*.html', ['static']);
  gulp.watch('src/**/*.css', ['css']);

});

gulp.task('dev', ['static', 'css', 'vendors', 'browserify', 'watch']);