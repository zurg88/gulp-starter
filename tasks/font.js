import gulp from "gulp";

import notify from "gulp-notify";
import plumber from "gulp-plumber";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

import path from "./config/paths";
import app from "./config/app";

export default () => {
	return gulp.src(path.img.src)
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(fonter(app.fonter))
	.pipe(newer(path.font.dest))
	.pipe(gulp.dest(path.font.dest))
	.pipe(ttf2woff2())
	.pipe(gulp.dest(path.font.dest))
}
