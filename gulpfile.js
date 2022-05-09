const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass')),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync'),
      autoprefixer = require('gulp-autoprefixer');
      // concat = require('gulp-concat');
      // uglify = require('gulp-uglify'),
      // cssmin = require('gulp-cssmin');



gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
         .pipe(sass().on('error', sass.logError))
        //  .pipe(sass({outputStyle: 'compressed'}))
        //  .pipe(rename({suffix: '.min'}))
         .pipe(autoprefixer({overrideBrowserslist: ['last 8 version']}))
         .pipe(gulp.dest('dist/css'))
         .pipe(browserSync.reload({ stream: true }))
});

gulp.task('style', () => {
  return gulp.src([
    'node_modules/normalize.css/normalize.css'
  ])
    // .pipe(concat('libs.min.css'))
    // .pipe(cssmin())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', () => {
  return gulp.src('app/js/main.js')
        // .pipe(uglify())
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({ stream: true }))
});

// gulp.task('script', function(){
//   return gulp.src([
//     'node_modules/jquery/dist/jquery.js',
//     'node_modules/slick-carousel/slick/slick.js',
//     'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
//   ])
//       .pipe(concat('libs.min.js'))
//       .pipe(uglify())
//       .pipe(gulp.dest('dist/js'))
// });

gulp.task('html', () => {
  return gulp.src('app/*.html')
         .pipe(gulp.dest('dist/'))
         .pipe(browserSync.reload({ stream: true }))
}); 

gulp.task('img', () => {
  return gulp.src('app/img/**/*.*')
         .pipe(gulp.dest('dist/img'))
         .pipe(browserSync.reload({ stream: true }))
}); 

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**.*')
         .pipe(gulp.dest('dist/fonts'))
         .pipe(browserSync.reload({ stream: true }))
}); 


gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
        baseDir: 'dist/'
    },
    port: 9000,
    host: 'localhost',
    notify: false
})
})

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('js'));
    gulp.watch('app/img', gulp.parallel('img'));
    gulp.watch('app/fonts', gulp.parallel('fonts'));
})

gulp.task('default', gulp.parallel('style', 'sass', 'watch', 'browser-sync', 'html', 'js', 'img', 'fonts'));
