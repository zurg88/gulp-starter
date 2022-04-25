import gulp from "gulp";

import notify from "gulp-notify";
import plumber from "gulp-plumber";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from "gulp-rename";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import webpCss from "gulp-webp-css";


import path from "./config/paths";
import app from "./config/app";

const sass = gulpSass(dartSass);

export default () => {
	return gulp.src(path.scss.src, { sourcemaps: app.isDev })
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(webpCss())
	.pipe(groupCssMediaQueries())
	.pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
	.pipe(rename({ suffix: ".min" }))
	.pipe(csso())
	.pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
}