import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
//import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify-es';
import gulpif from 'gulp-if';
import config from '../config';
const exec = require('child_process').exec;

/*export const reactBuild = () => (
	browserify(`${config.src.reactJs}/index.js`, { debug: false })
		.transform('babelify', { presets: ['@babel/preset-env', '@babel/preset-react'] })
		.transform('browserify-css', {
			autoInject: true,
			minify: true,
		})
		.bundle()
		.on('error', function browserifyError(error) {
			console.log(error.stack);
			this.emit('end');
		})
		.pipe(source('index.js'))
		.pipe(buffer())
		//.pipe(gulpif(config.isDev, sourcemaps.init({ loadMaps: true })))
		.pipe(gulpif(config.isProd, uglify()))
		//.pipe(gulpif(config.isDev, sourcemaps.write()))
		.pipe(gulp.dest(config.dest.reactJs))
);*/
export const reactBuild = () => {
	process.chdir('../client');
	exec('pwd');
	exec('npm run build', (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
	process.chdir('../server');
};
export const scriptsBuild = () => (
	browserify(`${config.src.js}/index.js`, { debug: true })
		.transform('babelify', { presets: ['@babel/preset-env'] })
		.bundle()
		.on('error', function browserifyError(error) {
			console.log(error.stack);
			this.emit('end');
		})
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(gulpif(config.isProd, uglify()))
		.pipe(gulp.dest(config.dest.js))
);

export const scriptsWatch = () => gulp.watch(`${config.src.js}/**/*.js`, scriptsBuild);
export const reactWatch = () => gulp.watch(`${config.src.reactJs}/**/*.{js,jsx}`, reactBuild);
