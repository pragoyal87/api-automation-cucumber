const winston = require('winston');

module.exports = new winston.Logger({
  level: process.env.LOG_LEVEL || 'error',
  colorize: true,
  transports: [
    new winston.transports.Console()
  ]
});