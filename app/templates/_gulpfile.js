/* jshint node:true */
'use strict';

var gulp = require('gulp'),
  requireDir = require('require-dir'),
  config = require('./gulp/config');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

gulp.task('dev', ['server']);
gulp.task('setProdBuild', function() {
  config.prod = true;
});
gulp.task('includeDev', function() {
  config.includeDev = true;
});
gulp.task('prod', ['setProdBuild', 'build']);
gulp.task('default', ['dev']);
