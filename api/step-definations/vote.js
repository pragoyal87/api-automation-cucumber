const request = require('request-promise');
const merge = require('deepmerge');
const { Given, When, Then } = require('cucumber');
const voteHeaderBuilder = require(`../supports/api-builder/builder/header/vote-api`);
const voteRequestBodyBuilder = require(`../supports/api-builder/builder/request/vote-api`);
const responseStore = require(`../supports/store/response`);
const {expect} = require('chai');
const getUrl = require('../supports/common/get-url');

var postVote = (journey) => {
return {
    method: 'POST',
    url: `${getUrl(journey)}/votes/`,
    json: true,
    resolveWithFullResponse: true,
        simple: true,
        gzip: true
};
};
When(/^User vote to the party (.*) and sub party (.*) and value of his vote is (.*) at (.*)$/, async function(partyImage, partySubName, voteValue,journey){

    const headers = new voteHeaderBuilder()
    .set('Content-Type', 'application/json')
    .getAll()
    
    const body = new voteRequestBodyBuilder()
    .setImageId(partyImage)
    .setVoteValue(voteValue)
    .setSubId(partySubName)
    .get()

    let response;
     let opts = merge(postVote(journey), {
         headers, body
     })
     console.log('---create vote post request--'+JSON.stringify(opts));
     try{
         response = await request(opts);
     }catch (e){
            response = {
                statusCode: e.statusCode,
                body: e.error
            };
    }
    console.log('---create vote post response--'+JSON.stringify(response));
    responseStore.set(response);
})

Then(/^User should get the response message (.*)$/, async function(message){
    console.log(responseStore.get().body.message);

 expect(responseStore.get().body.message).to.be.equal(message);

})