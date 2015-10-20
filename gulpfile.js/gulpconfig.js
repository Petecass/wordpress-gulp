
// customize per project

// directory naming conventions

var    themeName = 'melewi-blog'
             src = './src/',
           build = './build/',
         distDir = './dist/'
            dist = distDir + themeName + '/',
           bower = './bower_components/',
            sass = 'scss/',
           fonts = 'fonts/',
             img = 'images/',
              js = 'js/',
      bowerFiles = 'bowerFiles/';

var jsFiles = [
      src + js + 'slick.min.js',
      src + js + 'main.js'
];

module.exports = {

  sass : {
    src : src + sass + '**/*.scss',
    build : build,
    dist : dist,
    autoprefix : { browsers: ['> 3%', 'last 2 versions']},
    errorMessage : 'Problem running Sass',
  },

  js : {
    src : jsFiles,
    build : build + js,
    dist : dist + js,
    errorMessage : 'js errored'
  },

  browserSync : {
    notify: false,
    open: true,
    port: 3000,
    proxy: 'localhost:8888',
  },

  watch : {
    sass : src + sass + '**/**.scss',
    js : src + js + '**/**.js',
    themeFiles : src + '**/**.php',
    images : src + img + '**.**'
  },

  images : {
    src : src + img,
    fileType : '**.*',
    build : build + img,
    dist : dist + img,
    options : {
        optimizationLevel: 7,
        progressive: true,
        interlaced: true
    }
  },

  clean : {
    deleteFolder : [distDir, build],
    cleanFiles : build + '**/.DS_Store'
  },

  themeFiles : {
    src : src,
    build : build,
    dist : dist,
    filesToMove : '**.php'
  },

  fonts : {
    src : src + fonts + '**.**',
    build : build + fonts,
    dist : dist + fonts
  }
}
