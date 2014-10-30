module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		wiredep: {
				target: {
        				src: 'public_html/index.html' // point to your HTML file.
		   		 		}
				},
		connect: {
			html: {
				options: {
					port: 5000,
					base: 'public_html',
					livereload: true,
					//hostname:'localhost',
					hostname:'0.0.0.0' // network availability
				}
			}
		},
		sass: {
			dist: {
				files: {
					'public_html/css/style.css': 'public_html/scss/style.scss'
				}
			}
		},
		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'public_html/css/',
					src: ['**/*.css', '!*.min.css'],
					dest: 'publish/css/',
					ext: '.min.css'
				}]
			}
		},
		watch:{
			options:{
					livereload: true,
				},
			html:{
				files:['**/*.html'],
			},
			sass:{
				files:['**/*.scss'],
				tasks: 'sass',
				options: {livereload:false},
			},
			js:{
				files:['js/*.js'],
			},
			bower:{
				files:['bower.json'],
				tasks: 'wiredep',
			}

		}

	});

	grunt.registerTask('default', ['connect','watch']);

}