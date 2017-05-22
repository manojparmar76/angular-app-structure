'use strict';

module.exports = function(grunt) {

	require('load-grunt-config')(grunt, {
	 	data: {
			pkg: grunt.file.readJSON('package.json')
		}
 	});

	grunt.registerTask('startServer', ['connect:dev', 'watch']);

};
