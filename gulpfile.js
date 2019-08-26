var gulp = require('gulp');
var browserSync = require('browser-sync').create();

function styles() {
	return gulp.src( './css/*.css' )
		.pipe( browserSync.stream() );
}

function reload(done) {
	browserSync.reload();
	done();
}

function serve() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch( './index.html', gulp.series(reload) );
	gulp.watch( './css/*.css', gulp.series(styles) );
	gulp.watch( './js/*.js', gulp.series(reload) );
}

exports.reload = reload;
exports.styles = styles;
exports.serve = serve;

exports.default = serve;
