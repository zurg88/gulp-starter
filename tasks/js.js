import gulp from "gulp";

import notify from "gulp-notify";
import plumber from "gulp-plumber";
import babel from "gulp-babel";
import webpack from "webpack-stream";

import path from "./config/paths";
import app from "./config/app";

export default () => {
	return gulp.src(path.js.src, { sourcemaps: app.isDev })
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(babel())
	.pipe(webpack(app.webpack))
	.pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }))
}