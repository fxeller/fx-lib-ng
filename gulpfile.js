const gulp = require('gulp');
const spawn = require('cross-spawn');
const splitter = require('stream-splitter');
const sass = require('gulp-sass');
const tildeImporter = require('node-sass-tilde-importer');
const stripCssComments = require('gulp-strip-css-comments');
const fs = require('fs');

const libProjectName = 'fx-lib-ng';
const appProjectName = 'fx-lib-ng-tester';

gulp.task('build:lib:watch', function (done) {
    var cspr = spawn('ng', ['build', libProjectName, '--watch'], {env: {FORCE_COLOR: 1}});

    var spltr = cspr.stdout.pipe(splitter("\n"));
    spltr.encoding = "utf8";
    spltr.on("token", function(token) {
        console.log(token);
        
        if (token.includes("Compilation complete. Watching for file changes...")) {
            done();
        }
    })
});

gulp.task('build:app:watch', function (done) {
    var cspr = spawn('ng', ['serve', appProjectName, '--open'], {env: {FORCE_COLOR: 1}});

    var spltr = cspr.stdout.pipe(splitter("\n"));
    spltr.encoding = "utf8";
    spltr.on("token", function(token) {
        console.log(token);
        
        if (token.includes("Compiled successfully.")) {
            done();
        }
    })
});

gulp.task('build:css', function(done) {
    return gulp.src('projects/' + libProjectName + '/src/lib/theming/prebuilt/*.scss')
    .pipe(sass({importer: tildeImporter}).on('error', sass.logError))
    .pipe(stripCssComments())
    .pipe(gulp.dest('dist/' + libProjectName + '/lib/theming/prebuilt'));
});

gulp.task('watch:css', function(done) {
    gulp.watch('projects/' + libProjectName + '/src/lib/**/*theme.scss', gulp.series('build:css'));
    done();
});

gulp.task('build:css:watch', 
    gulp.series(
        'build:css', 
        'watch:css'
    )
);

gulp.task('build:finish', function (done) {
    console.log("Start developing!");
    done();
});

gulp.task('dev', 
    gulp.series(
        'build:lib:watch',
        'build:css:watch',
        'build:app:watch',
        'build:finish'
    )
);

gulp.task('default', gulp.series('dev'));