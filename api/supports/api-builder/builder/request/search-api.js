const RequestBuilder = require('../../../builder/request');
const merge = require('deepmerge');
const data = require(`../../data/request/search-api.json`);


class searchAPIRequestBuilder extends RequestBuilder {

    constructor () {
        super(data);
        return this;
    }
    /***************************************** MANDATORY FIELDS ******************************************************/


    setId(id) {
        this.data.id = id;

        return this;
    }
    
    /********************************REMOVE****************************************/


    removeKey(field) {
        if (field === 'dataID') {
            delete this.data.data.data.id;
        }
        return this;
    }


}

module.exports = searchAPIRequestBuilder;
