'use strict'

module.exports = (grunt)->
  grunt.initConfig
    appDir: "./"
    compass:
      all:
        options:
          sassDir: '<%= appDir %>/styles'
          cssDir: '<%= appDir %>/styles'
    coffee:
      all:
        options:
          bare: true
        files: [
          expand: true
          cwd: '<%= appDir %>/scripts'
          # src: '<%= appDir %>/scripts/{,*/}*.coffee'
          src: '**/*.coffee'
          dest: '<%= appDir %>/scripts'
          ext: '.js'
        ]
    watch:
      options:
        livereload: true
      coffee:
        files: [ '<%= appDir %>/scripts/{,*/}*.coffee' ],
        tasks: ['coffee']
      compass:
        files: [ '<%= appDir %>/styles/**/*.scss' ]
        tasks: ['compass']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-handlebars'
  grunt.registerTask 'default', [
    'coffee'
    'compass'
    'watch'
  ]
