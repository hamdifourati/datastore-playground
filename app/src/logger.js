const winston = require('winston');


const logger = winston.createLogger({
  level: 'error' ? process.env.NODE_ENV === 'production' : 'debug',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console()
  ]
});


module.exports = logger;
