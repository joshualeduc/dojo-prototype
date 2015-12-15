var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
ngAnnotate = require('gulp-ng-annotate'),
uglifyCss = require('gulp-uglifycss'),
nodemon = require('gulp-nodemon');
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
  gulp.src(['./app/app.module.js', './app/app.routes.js', './app/app.mainCtrl.js', './app/app.playerCtrl.js', './app/component/**/*.js', './app/shared/**/*.js'])
    .pipe(ngAnnotate())
    .pipe(concat('all.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./public/'));
});

// gulp.task('watch', function(){
//   gulp.watch(['./app/**/*.js', './app/styles/*.css'], ['styles', javascript]);
// });

// gulp.task('develop', function(){
//   nodemon({
//     script: 'server.js',
//     ext: 'js',
//     watch: ['./app/**/*.js', './app/styles/*.css'],
//     env: {
//       'NODE_ENV': 'development'
//     }
//   })
//   .on('start', ['watch'])
//   .on('change', [watch])
//   .on('restart', function(){
//     console.log('restarted!');
//   });
// });

gulp.task('default', ['styles', 'javascript']);
