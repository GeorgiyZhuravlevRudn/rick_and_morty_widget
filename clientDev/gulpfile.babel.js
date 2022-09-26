import gulp from 'gulp';
//import nodemon from 'gulp-nodemon';
import config from './gulp/config';
import clean from './gulp/tasks/clean';
//import server from './gulp/tasks/server';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites';

config.setEnv();
//exports.reactBuild = reactBuild;
exports.clean = clean;
export const build = gulp.series(
	gulp.parallel(
		stylesBuild,
		assetsBuild,
		imagesBuild,
		spritesBuild,
	),
);
export const watch = gulp.series(
	build,
	//server,
	gulp.parallel(
		stylesWatch,
		assetsWatch,
		imagesWatch,
		spritesWatch,
	),
);
