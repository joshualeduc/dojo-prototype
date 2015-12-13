var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
ngAnnotate = require('gulp-ng-annotate'),
uglifyCss = require('gulp-uglifycss'),
watcher = gulp.watch(['./app/**/*.js', './app/styles/*.css'], ['default']);

watcher.on('change', function(event){
  console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});

gulp.task('styles', function(){
  gulp.src('./app/styles/*.css')
    .pipe(uglifyCss())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('javascript', function(){
  gulp.src(['./app/**/*.js'])
    .pipe(ngAnnotate())
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['styles', 'javascript']);
