var gulp = require('gulp'),
clean = require('gulp-clean'),
htmlmin = require('gulp-htmlmin'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
ngAnnotate = require('gulp-ng-annotate'),
uglifyCss = require('gulp-uglifycss'),
eslint = require('gulp-eslint'),
nodemon = require('gulp-nodemon');

gulp.task('html', function(){
  gulp.src('./view/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public/template'));
});

gulp.task('styles', function(){
  gulp.src('./app/styles/*.css')
    .pipe(uglifyCss())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/'));
});

//Is this working?
gulp.task('lint', function(){
  gulp.src(['./app/*.js', './app/component/**/*.js', './app/shared/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('javascript', function(){
  gulp.src(['./app/*.js', './app/component/**/*.js', './app/shared/**/*.js'])
    .pipe(ngAnnotate())
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/'));
});

gulp.task('clean', function(){
  return gulp.src('./public', {read: false})
    .pipe(clean());
});

gulp.task('demon', function(){
  nodemon({
    script: 'server.js',
    ext: 'js html css',
    watch: ['app/*.js', 'app/component/**/*.js', 'app/shared/**/*.js', 'app/styles/*.css', 'view/*.html']
  })
  .on('start', ['html', 'styles', 'lint', 'javascript'], function(){
    console.log('listening on ' + 5000);
    })
  .on('change', ['html', 'styles', 'lint', 'javascript'], function(){
    console.log('listening on ' + 5000);
    })
  .on('restart', function(){
    console.log('restarted!');
  });
});

gulp.task('default', ['clean'], function(){
    gulp.start('demon');
});
