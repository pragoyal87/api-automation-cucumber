let configs = require('../../../wdio.conf.js').config.serverURL;

module.exports = (journey) => {
  return configs[journey]|| undefined;
};
