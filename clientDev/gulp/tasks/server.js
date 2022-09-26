import browserSync from 'browser-sync';
import config from '../config';

const server = (callback) => {
  browserSync.create().init({
    server: {
      baseDir: config.dest.root,
    },
	port: 7000,
	files: [
      `${config.dest.html}/*.html`,
      `${config.dest.css}/*.css`,
	  `${config.dest.reactJs}/*.js`,
      {
        match: `${config.dest.images}/**/*`,
        fn() {
          this.reload();
        },
      },
    ],
    open: false,
    notify: false,
  });
  callback();
};

export default server;
