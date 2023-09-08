import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

import cleansCss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const scss = () => {
   return app.gulp.src(app.path.src.scss, {sourcemaps: true})
   .pipe(app.plugins.replace(/@img\//g, '../img/'))
   .pipe(sass({
      outputStyle:'expanded' 
   }))
   .pipe(groupCssMediaQueries())
      .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ['last 3 versions'],
      cascade: true
   })
   )
   .pipe(app.gulp.dest(app.path.build.css)) 
   .pipe(cleansCss())
   .pipe(rename({
      extname:'.min.css' 
   }))
   .pipe(app.gulp.dest(app.path.build.css)) 
   .pipe(app.plugins.browsersync.stream()) 
  
};
