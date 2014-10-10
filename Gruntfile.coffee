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

        eslint:
            all: ['dist/morphext.js']

    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.loadNpmTasks 'grunt-eslint'

    grunt.registerTask 'default', ['test', 'uglify']
    grunt.registerTask 'test', ['eslint']