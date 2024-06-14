const gulp = require("gulp");


const minimist = require("minimist");

const iconfont = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');
const rename = require('gulp-rename');

//let argv = minimist(process.argv.slice(2));

// アイコンフォント

var filename = 'icon';
gulp.task('Iconfont', function(){
  return gulp.src(['icons/*.svg'])
      .pipe(iconfont({
           fontName: filename,
           //prependUnicode: true,
           formats: ['ttf', 'eot', 'woff','woff2' , 'svg' ]
          }))
      .on('glyphs', function(glyphs, options) {

          let consolidateOptions = {
              glyphs: glyphs,
              fontName: filename,
              fontPath: '../fonts/',
              className: 'ico'
          }

          gulp.src('temp/css.ejs')
              .pipe(consolidate('lodash', consolidateOptions))
              .pipe(rename( { basename: filename , extname: '.css'} ) )
              .pipe(gulp.dest('htdocs/css/'));

          gulp.src('temp/css.ejs')
              .pipe(consolidate('lodash', consolidateOptions))
              .pipe(rename( { basename: "_icon" , extname: '.scss'} ) )
              .pipe(gulp.dest('htdocs/scss/'));

          gulp.src('temp/html.ejs' )
              .pipe(consolidate( 'lodash', consolidateOptions))
              .pipe( rename( { basename: filename , extname: '.html'}))
              .pipe( gulp.dest( 'htdocs/' ) );
      })
      .pipe(gulp.dest('htdocs/fonts/'));
});


const dir = {
  src: "htdocs/", // _srcフォルダ置き換え
};

const watch_reload = [
  "htdocs/**/*.html",
];




