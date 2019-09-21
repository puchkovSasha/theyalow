var gulp = require('gulp'),
    sass= require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
 
gulp.task('sass', function(){
	return gulp.src('src/sass/*.sass')    
		.pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 8 versions'],
            cascade: false
        }))
    .pipe(concatCss('main.css'))
    .pipe(gulp.dest('src/css'));
});

gulp.task('js', function(){
    return gulp.src('src/js/*.js');
    
});

gulp.task('watch', function(){
	 gulp.watch('src/sass/*.sass', gulp.parallel('sass'));
     gulp.watch('src/js/*.js', gulp.parallel('js'));
});
gulp.task('default', gulp.parallel('sass','watch'));