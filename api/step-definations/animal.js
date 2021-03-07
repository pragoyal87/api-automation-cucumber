// const request = require("request");
const request = require('request-promise');
const merge = require('deepmerge');
const { Given, When } = require('cucumber');
const searchHeaderBuilder = require(`../supports/api-builder/builder/header/search-api`);
const searchRequestBodyBuilder = require(`../supports/api-builder/builder/request/search-api`);
const HeaderBuilder = require('../supports/builder/header');
const getUrl = require('../supports/common/get-url');
const responseStore = require(`../supports/store/response`);

var serach = (journey) => {
return {
  method: 'POST',
  url: `${getUrl(journey)}/posts`,
  json: true ,
  resolveWithFullResponse: true,
  simple: true,
  gzip: true
};
};

When(/^As a user i want to add my animal details at (.*)$/,async function(journry) { 
const headers = new searchHeaderBuilder()
  .set('Content-Type', 'application/json')
  .getAll()
  
const body = new searchRequestBodyBuilder()
.setId(501)
.get()
  
let response;
  let opts = merge(serach(journry), { 
    headers,
    body
  })
  console.log('-- add animal request details---> ', JSON.stringify(opts));
  try {
    response = await request(opts);
  } catch (e) {
    response = {
      statusCode: e.statusCode,
      body: e.error
    };
  }
  console.log('\n-- add animal Response details ---> ', JSON.stringify(response));
  responseStore.set(response);
 
});



