'use strict';

const ip = require('ip');

module.exports =
  {
    serverOptions: {
      // --- port and host name ---
      listenPort : process.env.PORT,
      hostName: "ip.address()", // ex) server.domain.com
      // --- for using HTTPS ---
      useHttps: false,
      httpsKeyFile: './key/server.key',
      httpsCertFile: './key/server.cert',

      dummyTail: false
    }}