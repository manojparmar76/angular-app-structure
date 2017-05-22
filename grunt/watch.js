'use strict';

module.exports = {
 scripts: {
    files: [
    'src/public/scripts/**/*.js'
    ],
    tasks: ['connect:dev'],
    options: {
      spawn: false,
      livereload:true
    },
  }
};