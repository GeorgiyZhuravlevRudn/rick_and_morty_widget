const srcPath = 'src';
const destPath = 'build';
const client = '../client';
//--TODO--//
// make -build -public options
const config = {
	src: {
		root: srcPath,
		sass: `${srcPath}/scss`,
		sassComponent: `${srcPath}/scss/components`,
		js: `${srcPath}/js`,
		fonts: `${srcPath}/assets/fonts`,
		images: `${srcPath}/assets/images`,
		iconsMono: `${srcPath}/assets/icons/mono`,
		iconsMulti: `${srcPath}/assets/icons/multi`,
		html: `${srcPath}/html`,
	},
	client: {
		root: `${client}/${srcPath}`,
		dest: `${client}/${destPath}`,
	},
	dest: {
		root: destPath,
		html: destPath,
		css: `${destPath}/css`,
		clientCss: `${client}/src/css`,
		clientCssUI: `${client}/src/components/UI`,
		js: `${destPath}/js`,
		reactJs: `${destPath}/react`,
		fonts: `${client}/${destPath}/fonts`,
		images: `${client}/${destPath}/images`,
	},

	setEnv() {
		this.isProd = process.argv.includes('--prod');
		this.isDev = !this.isProd;
	},
};

export default config;
