var gulp            = require("gulp"),
    watch           = require("gulp-watch"),
    browserSync     = require("browser-sync");

//defines html task
gulp.task("html", function(){
    browserSync.reload();
});

//defines task watch, when invoked from CLI starts watching the files passed as first argument to watch
gulp.task("watch", function(){
   watch("./app/index.html", function(){
       gulp.start('html');
   });

   //anytime changes are made to css styles, triggers cssInject task
   watch("./app/assets/styles/**/*.css", function(){
       gulp.start('cssInject');
   });

   //intializes browser sync and sets the base directory
   browserSync.init({
      server: {
        baseDir: "app"
      }
   });
});

//cssInject has styles task as dependency in [] will take
//new css and pipe it to stream after the 'styles' task is run
gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
      .pipe(browserSync.stream());
});


