import gulp from "gulp"
import browserSync from "browser-sync";

import path from "./tasks/config/paths";
import app from "./tasks/config/app";

import html from "./tasks/html";
import scss from "./tasks/scss";
import js from "./tasks/js";
import clear from "./tasks/clear";
import img from "./tasks/img";
import font from "./tasks/font";

// Server
const server = () => {
	browserSync.init({
		server: {
			baseDir: path.root
		}
	});
};

// Watcher
const watcher = () => {
	gulp.watch(path.html.watch, html).on("all", browserSync.reload);
	gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
	gulp.watch(path.js.watch, js).on("all", browserSync.reload);
	gulp.watch(path.img.watch, img).on("all", browserSync.reload);
	gulp.watch(path.font.watch, font).on("all", browserSync.reload);
}

export { html };
export { watcher };
export { scss };
export { js };
export { img };
export { font };

const build = gulp.series(
	clear,
	gulp.parallel(html, scss, js, img, font),
);

const dev = gulp.series(
	build,
	gulp.parallel(watcher, server)
);

export default app.isProd
	? build
	: dev;