// Include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
let cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
//var uglify = require('gulp-uglify');

//dist path
const root_path = {
    src: "./src/",
    dist: "./dist/"
};


gulp.task('minify-js', function () {
    return gulp.src(root_path.src + '*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            //noSource: true,
            mangle: false,
            exclude: ['dist', 'demo'],
            ignoreFiles: ['.min.js']
        }))
        .pipe(gulp.dest('dist'))
});


gulp.task('minify-css', function () {
    return gulp.src(root_path.src + '*.css')
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy2demo', function () {
    return gulp.src(root_path.dist + '*')
        .pipe(gulp.dest('demo'));
});


gulp.task("default", ["minify-js", "minify-css", "copy2demo"]);