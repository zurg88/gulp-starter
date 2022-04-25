import gulp from "gulp";

import fileInclude from "gulp-file-include";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import htmlmin from "gulp-htmlmin";
import webpHtml from "gulp-webp-html";

import path from "./config/paths";
import app from "./config/app";

export default () => {
	return gulp.src(path.html.src)
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(fileInclude())
	.pipe(webpHtml())
	.pipe(htmlmin(app.htmlmin))
	.pipe(gulp.dest(path.html.dest))
}