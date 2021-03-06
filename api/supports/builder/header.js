const log = require(`./log.js`);

class HeaderBuilder {
  constructor (data) {
    this.data = data;

    return this;
  }

  set (header, value) {
    log.debug(`Setting ${header} header to ${value}`);

    this.data[header] = value;
    return this;
  }

  setAll (headers) {
    log.debug(`Setting ${headers} headers`);

    this.headers = headers;

    return this;
  }

  unset (header) {
    log.debug(`Unsetting ${header} header`);

    delete this.data[header];

    return this;
  }

  unsetAll () {
    log.debug('Unsetting all headers');

    this.data = {};
  }

  get (header) {
    return this.data[header];
  }

  getAll () {
    return this.data;
  }
}

module.exports = HeaderBuilder;
