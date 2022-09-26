import gulp from 'gulp';
import path from 'path';
import config from '../config';

const fse = require('fs-extra');
const pathD = path.resolve(__dirname).split('/');
let currPath = '';
for (let i = 1; i < 6; i++) {
	currPath += '/';
	currPath += pathD[i];
}
const srcDir = currPath + `/${config.dest.root}`;
const destDir = currPath + '/public';
export const copyDirBuild = (cb) => {
	fse.copySync(srcDir, destDir, { overwrite: true });
	cb();
};
export const copyDirWatch = () => gulp.watch(`${config.src.root}`, copyDirBuild);
