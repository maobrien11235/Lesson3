var gulp = require('gulp'),
  connect - require('gulp-connect');

gulp.src('client/js/**/*js')
	.pipe(minify())
	.pipe(gulp.dest('build');

gupl.src('client/js/**/*.js', { base: 'client'})
	.pipe(minify())
	.pipe(gulp.dest('build'));

gulp.task('webserver', function() {
	
	connect.server({
		livereload: true
	});
});

gulp.task('default', ['webserver']);
