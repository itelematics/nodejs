let
  redis     = require('redis'),
  /* Values are hard-coded for this example, it's usually best to bring these in via file or environment variable for production */
  client    = redis.createClient({
    port      : 6379,               // replace with your port
    host      : '120.0.0.1',        // replace with your hostanme or IP address
    password  : 'your password',    // replace with your password
    // optional, if using SSL
    // use `fs.readFile[Sync]` or another method to bring these values in
    tls       : {
      key  : stringValueOfKeyFile,  
      cert : stringValueOfCertFile,
      ca   : [ stringValueOfCaCertFile ]
    }
  });
  