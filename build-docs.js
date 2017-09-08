var gulp = require('gulp');
var marked = require('gulp-marked');
var frontMatter = require('gulp-front-matter');
var through = require('through2');
var highlight = require('highlight.js');
var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var rename = require('gulp-rename');
var rimraf = require('rimraf');
var glob = require('glob');
const shell = require('shelljs');
const chalk = require('chalk');
const lodashCompiler = _.template(fs.readFileSync('./site/layout.html', 'utf8'));


shell.echo(`Start building demos...`);
shell.rm(`-Rf`, `docs/*`);
shell.cd('demos');
shell.exec('ng build -aot --target=production --base-href /nowzoo-angular-bootstrap-lite/demos --deploy-url https://nowzoo.github.io/nowzoo-angular-bootstrap-lite/demos --output-path ../docs/demos')
shell.cd(__dirname);
shell.echo(`Demos built.`);

gulp.src('./site/**/*.md')

  .pipe(frontMatter())
  .pipe(through.obj(function (file, enc, cb) {
    file.data = Object.assign({}, file.frontMatter);
    file.contents = file._contents;
    cb(null, file);
  }))
  .pipe(marked({
    highlight: function(code) {
      return highlight.highlightAuto(code).value;
    }
  }))
  .pipe(through.obj(function (file, enc, cb) {
    let data = Object.assign({}, file.data, {contents: file.contents.toString()});
    let page = lodashCompiler(data);
    file.contents = new Buffer(page);
    cb(null, file);
  }))
  .pipe(rename(function (p) {
    if ('index' !== p.basename) {
      p.dirname = path.join(p.dirname, p.basename);
      p.basename = 'index';
    }

  }))
  .pipe(gulp.dest('./docs/'));


    // .pipe(gulp.dest('./site/html/'))
