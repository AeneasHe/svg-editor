const gulp = require('gulp');
const concat = require('gulp-concat');
const useref = require('gulp-useref');
const replace = require('gulp-replace');
const cachebust = require('gulp-cache-bust');
const minify = require('gulp-minify');
const connect = require("gulp-connect");

gulp.task('css', function () {
  return gulp.src('src/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
  return gulp.src(['src/js/*.js', 'src/lib/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('loading', function () {
  return gulp.src('src/js/loading.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('index', function () {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(cachebust({ type: 'timestamp' }))
    .pipe(gulp.dest('dist'));
});

// no service worker implemented yet
gulp.task('cache', function () {
  return gulp.src(['./src/serviceworker.js'])
    .pipe(replace('<timestamp>', Date.now()))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('manifest', function () {
  return gulp.src(['./src/site.webmanifest'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('images', function () {
  return gulp.src(['src/images/**/*'])
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function () {
  return gulp.src(['src/font-files/**/*'])
    .pipe(gulp.dest('dist/font-files'));
});

gulp.task('extensions', function () {
  return gulp.src(['src/extensions/**/*'])
    .pipe(gulp.dest('dist/extensions'));
});

gulp.task('shapelib', function () {
  return gulp.src(['src/shapelib/**/*'])
    .pipe(gulp.dest('dist/shapelib'));
});

gulp.task('canvg', function () {
  return gulp.src(['src/js/lib/canvg.js', 'src/js/lib/rgbcolor.js'])
    .pipe(gulp.dest('dist/js/lib'));
});

gulp.task('build',
  gulp.series(
    'css',
    'js',
    'index',
    'manifest',
    'images',
    'fonts',
    'extensions',
    'shapelib',
    'canvg'
  )
);

gulp.task("watch", function () {//监听任务
  gulp.watch("src/index.html", ["copy-index"]);
  // gulp.watch("src/SASS/*.scss", ["sass-min-rename"]);
  gulp.watch("src/src/**/*.*", ["reload"]);//监听dist下所有文件
})

gulp.task("reload", function () {
  gulp.src("src/dist/**/*.html")
    .pipe(connect.reload());
})

gulp.task("server", function () {//配置热更新服务器
  connect.server({
    root: "./src",
    livereload: true,
    port: 8030
  })
})
/*wacth和server命令只能运行一个，所以可以用default同时执行多个任务，命令行直接gulp执行*/
gulp.task("default", gulp.series("server", "watch"));//函数可以不传
