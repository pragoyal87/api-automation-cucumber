const defaultHeaders = require(`../../data/header/search-api.json`);
const merge = require('deepmerge');
const HeaderBuilder = require(`../../../builder/header`);

class searchAPIHeaderBuilder extends HeaderBuilder {
  constructor () {
    super(merge({}, defaultHeaders));
    return this;
  }
}

module.exports = searchAPIHeaderBuilder;