var gulp = require('gulp');
const { series } = require('gulp');
const browsersync = require('browser-sync').create();

function browsersyncServe(cb){
    browsersync.init({
      open: "external",
      server: {
        baseDir: './dist'
      },function() {
        externalUrl = browserSync.getOption('urls').get('external');
        browserSyncDone();
    }
    });
    cb();
}

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:8024",
        open: "external"
    }, function() {
        externalUrl = browserSync.getOption('urls').get('external');
        browserSyncDone();
    });
});

function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

exports.default = series(
    browsersyncServe,
);