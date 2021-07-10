'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

var prefixerOptions = {
    browsersList: ['defaults']
};

function script() {
    return gulp.src('scripts/*.js')
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('./'))
}

function style() {
    return gulp.src('styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(concat('style.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('./'));
};

function watch(){
    style();
    script();

    gulp.watch('styles/*', style);
    gulp.watch('scripts/*.js', script);
}

exports.watch = watch;