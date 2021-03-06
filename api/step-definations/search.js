// const request = require("request");
const request = require('request-promise');
const merge = require('deepmerge');
const { Given, When } = require('cucumber');
const searchHeaderBuilder = require(`../supports/api-builder/builder/header/search-api`);
const searchRequestBodyBuilder = require(`../supports/api-builder/builder/request/search-api`);
const HeaderBuilder = require('../supports/builder/header');

var serach = { method: 'POST',
  url: 'https://jsonplaceholder.typicode.com/posts',
  // body: { userId: 1, id: 1, title: 'animal test', body: 'type of animal' },
  json: true };


When(/^As a user i wanted to create details$/,async function() { 
const headers = new searchHeaderBuilder()
  .set('Content-Type', 'application/json')
  .getAll()
  
const body = new searchRequestBodyBuilder()
.setId(501)
.get()
  
let response;
  let opts = merge(serach, { 
    headers,
    body
  })
  console.log('-- request option---> ', JSON.stringify(opts));
  try {
    response = await request(opts);
  } catch (e) {
    response = {
      statusCode: e.statusCode,
      body: e.error
    };
  }
  console.log('\n-- dsip inbound Response ---> ', JSON.stringify(response));
});



