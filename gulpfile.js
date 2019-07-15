const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./css/"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./scss/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("sass", "sass:watch"));
