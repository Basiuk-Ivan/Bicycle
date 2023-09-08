import webpack from 'webpack-stream'
import jsmin from 'gulp-jsmin'
import rename from 'gulp-rename'

export const js = () => {
   return app.gulp.src(app.path.src.js, { sourcemaps: true})
   .pipe(webpack({
      mode:'development',
      output:{
         filename:'index.js'
      }
   }))
   .pipe(app.gulp.dest(app.path.build.js))
   .pipe(jsmin())
   .pipe(rename({suffix: '.min'}))
   .pipe(app.gulp.dest(app.path.build.js))
   .pipe(app.plugins.browsersync.stream())
};