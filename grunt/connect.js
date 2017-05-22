'use strict';

module.exports = {
   dev: {
      options: {
         port: 8181,
         hostname: 'localhost',
         base:'src',
         keepalive: true,
         livereload: true,
         open: {
            target: 'http://localhost:8181/#'
         }
      }
   }
}