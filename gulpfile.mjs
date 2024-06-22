import gulp from 'gulp';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import sass from 'gulp-sass';
import dartSass from 'sass';
import browserSync from 'browser-sync';

const sassCompiler = sass(dartSass);
const bs = browserSync.create();

// Formatage ESLint
gulp.task('lint', () => {
	return gulp
		.src('src/js/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

// Minification du JS et concaténation des fichiers JS
gulp.task('scripts', () => {
	return gulp
		.src('src/js/**/*.js')
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream());
});

// Optimization des images
gulp.task('images', () => {
	return (
		gulp
			.src('src/images/*', { encoding: false })
			// .pipe(
			// 	imagemin([
			// 		mozjpeg({ quality: 75, progressive: true }),
			// 		pngquant({ quality: [0.6, 0.8] }),
			// 	])
			// )
			.pipe(gulp.dest('dist/images'))
	);
});

gulp.task('svgs', () => {
	return gulp.src('src/svgs/*.svg').pipe(gulp.dest('dist/svgs'));
});

// Compile le SCSS
gulp.task('styles', () => {
	return gulp
		.src('src/scss/**/*.scss')
		.pipe(sassCompiler().on('error', sassCompiler.logError))
		.pipe(gulp.dest('dist/css'))
		.pipe(bs.stream());
});

// Browser Sync
gulp.task('serve', () => {
	bs.init({
		server: {
			baseDir: './',
		},
	});

	gulp.watch('src/js/**/*.js', gulp.series('lint', 'scripts'));
	gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
	gulp.watch('src/images/*', gulp.series('images'));
	gulp.watch('src/svgs/*', gulp.series('svgs'));
	gulp.watch('*.html').on('change', bs.reload);
});

gulp.task(
	'default',
	gulp.series('lint', 'scripts', 'images', 'svgs', 'styles', 'serve')
);
