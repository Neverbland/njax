/* jshint node: true */
'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('compress', function() {
    gulp.src('jquery.njax.js')
        .pipe(uglify())
        .pipe(rename('jquery.njax.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['compress']);