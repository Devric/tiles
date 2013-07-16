/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json')

    // generate js documentations
    // replace with grunt-dox when available
    , docco : {
        doc : {
            src : ['../app/**/*.js']
            , options: {
                output: '../docs/js'
            }
        }
    }

    // css doc generation
    // TODO still issues
    , styleguide : {
        doc : {
            options : {
                framework : {
                    name : 'kss'
                }
              , template : {
                  src : {}
              }
            }
          , files : {
              '../docs/css' : '../asset/css/src/m/**/*.styl'
          }
        }
    }

    // concate and generate stylus
    , stylus : {
        compile: {
            options : {
                'include css' : true
              , 'debug' : true
              , 'linenos' : true
            },
            files : {
                'css/app.css' : 'css/src/app.styl'
            }
        }
    }

    , clean : {
        dev : {
            options : {
                force : true
            }
            , src : ['css/src/**/*.css']
        }
    }

     , watch: {
        css : {
              files : 'css/src/**/*.styl'
            , tasks : ['stylus','clean']
            , options : {
                interrupt: true
            }
        }
     }
});

   grunt.loadNpmTasks('grunt-docco');
   grunt.loadNpmTasks('grunt-styleguide');

   grunt.loadNpmTasks('grunt-contrib-stylus');

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['clean']);

  // grunt.registerTask('build', ['targethtml', 'compile-templates', 'docco', 'requirejs', 'clean', 'uglify']);
};
