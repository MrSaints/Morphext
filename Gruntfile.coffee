module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        uglify:
            options:
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */'
            dist:
                files:
                    'dist/morphext.min.js': ['dist/morphext.js']

    grunt.loadNpmTasks 'grunt-contrib-uglify';

    grunt.registerTask('default', ['uglify']);