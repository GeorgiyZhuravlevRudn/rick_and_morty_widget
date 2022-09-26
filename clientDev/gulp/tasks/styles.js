import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import sassGlob from 'gulp-sass-glob';
import config from '../config';

const sass = gulpSass(dartSass);
function onError(err) {
  console.log(err);
  this.emit('end');
}
const sassBuild = () => (
	gulp.src(`${config.src.sass}/styles.scss`, { sourcemaps: config.isDev })
		.pipe(plumber(onError))
		.pipe(sassGlob())
		.pipe(gulpif(config.isDev,
			sass(
						{ 
							outputStyle: 'expanded',
							includePaths:['./node_modules']
						}
				)
			)
		)
		.pipe(gulpif(config.isProd, sass({ outputStyle: 'compressed' })))
		.pipe(gulpif(config.isProd, gcmq()))
		.pipe(gulpif(config.isProd, autoprefixer()))
		.pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
		.pipe(rename({
			suffix: '.min',
		}))
		.pipe(gulp.dest(config.dest.clientCss, { sourcemaps: config.isDev }))
);
const reactStylesBuild = () => (
	gulp.src(`${config.src.sassComponent}/**/*.scss`, { sourcemaps: config.isDev })
		.pipe(plumber(onError))
		.pipe(sassGlob())
		.pipe(gulpif(config.isDev, sass(
						{ 
							outputStyle: 'expanded',
							includePaths:['./node_modules']
						}
				)
			)
		)
		.pipe(gulpif(config.isProd, sass({ outputStyle: 'compressed' })))
		.pipe(gulpif(config.isProd, gcmq()))
		.pipe(gulpif(config.isProd, autoprefixer()))
		.pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
		.pipe(rename({
			suffix: '.module',
		}))
		.pipe(gulp.dest(`${config.dest.clientCssUI}`, { sourcemaps: config.isDev }))

);
export const stylesBuild = gulp.series(
	sassBuild,
	reactStylesBuild,
);
export const stylesWatch = () => {
	gulp.watch(`${config.src.sass}/**/*.scss`, sassBuild);
	gulp.watch(`${config.src.sass}/components/**/*.scss`, reactStylesBuild);
};
