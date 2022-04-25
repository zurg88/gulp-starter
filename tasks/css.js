import gulp from "gulp";

import notify from "gulp-notify";
import plumber from "gulp-plumber";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import webpCss from "gulp-webp-css";
import groupCssMediaQueries from "gulp-group-css-media-queries";

import path from "./config/paths";
import app from "./config/app";

export default () => {
	return gulp.src(path.css.src, { sourcemaps: app.isDev })
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(concat("main.css"))
	.pipe(autoprefixer())
	.pipe(webpCss())
	.pipe(groupCssMediaQueries())
	.pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
	.pipe(rename({ suffix: ".min" }))
	.pipe(csso())
	.pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
}

