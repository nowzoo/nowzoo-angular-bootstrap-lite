var gulp = require('gulp');
var marked = require('gulp-marked');
var frontMatter = require('gulp-front-matter');
var through = require('through2');
var highlight = require('highlight.js');
var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var rename = require("gulp-rename");
var rimraf = require("rimraf");


gulp.task('site', () => {
  var lodashCompiler = _.template(fs.readFileSync('./site/layout.html', 'utf8'));
  rimraf.sync('./site/html');
  //console.log(template)
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
    .pipe(gulp.dest('./site/html/'));
})

    // .pipe(gulp.dest('./site/html/'))
