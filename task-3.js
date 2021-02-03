const gulp = require('gulp');
const concat = require('gulp-concat');
const {src, dest} = require('gulp');

async function taskCombineJS(){
    return src('src/**/*.js')
        .pipe(concat('result.js'))
            .pipe(dest('output/'));
}

async function taskCOmbineCSS(){
    return src('src/**/*.css')
        .pipe(concat('result.css'))
            .pipe(dest('output/'));
}

const mainTask = gulp.series(taskCombineJS, taskCombineCSS);

exports.default = mainTask;