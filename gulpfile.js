var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var env = process.env.NODE_ENV || 'development';
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
 
// JAVASCRIPT TASK: write one minified js file
gulp.task('js', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-resource/angular-resource.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/toastr/build/toastr.min.js',
        'public/app/**/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public/js'));
});
 
// CSS TASK: write one minified css file
gulp.task('css', function () {
    return gulp.src([
        'node_modules/toastr/build/toastr.min.css'])
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public/css'));
});
 
// define executable tasks when running "gulp" command
gulp.task('default', ['js', 'css']);