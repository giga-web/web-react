var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var fileinclude  = require('gulp-file-include');
var uglify  = require('gulp-uglify');
var browserSync = require('browser-sync').create();

var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

function clean() {
  return del('dist/**', {force:true});
}
function html() {
    var html = gulp.src('src/**/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            context: {
                version: '?='+ new Date().getTime()
            },
            indent: true
        }))
        .pipe(gulp.dest('dist/'));

    return html;

}

function css() {
  var processors = [
    autoprefixer({browsers: ['last 20 version']}),
    cssnano
  ];

  return gulp.src("src/cdn/**/css/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest("dist/cdn/"));
}

function js() {
  return gulp.src("src/cdn/**/javascript/**/*.js", { sourcemaps: true })
    // .pipe(uglify())
    .pipe(gulp.dest("dist/cdn/", { sourcemaps: '.' }));
}

function media() {
  return gulp.src("src/cdn/**/media/**")
    .pipe(gulp.dest("dist/cdn/"))
}

function libs() {
  return gulp.src("src/cdn/**/libs/**")
    .pipe(gulp.dest("dist/cdn/"))
}

function server(argument) {
  browserSync.init({
    server: {
      baseDir: "dist"
    },
    port: 3000,
    host: '192.168.104.40',
  });

  gulp.watch("src/**/*.html", html);
  gulp.watch("src/cdn/**/css/**/*.scss", css);
  gulp.watch("src/cdn/**/javascript/**/*.js", js);
  gulp.watch("src/cdn/**/media/**", media);
  gulp.watch("src/cdn/**/libs/**", libs);

  gulp.watch("dist").on('change', browserSync.reload);
}

// exports.default = gulp.series(clean, html);
exports.default = gulp.series(clean, html, css, js, media, libs, server);
