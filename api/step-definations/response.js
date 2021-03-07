const {Then} = require('cucumber');
const {expect} = require('chai');
const responseStore = require('../supports/store/response');

Then(/^User should receive the status code (.*)$/, (statusCode) => {
    browser.pause(5000);
    expect(parseInt(statusCode)).to.equal(responseStore.get().statusCode);
})
