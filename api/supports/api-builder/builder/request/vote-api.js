const RequestBuilder = require('../../../builder/request');
const merge = require('deepmerge');
const data = require(`../../data/request/vote-api.json`);


class voteAPIRequestBuilder extends RequestBuilder{

    constructor (){
        super(data);
        return this;
    }

    /***************************************** MANDATORY FIELDS ******************************************************/

    setImageId(image){
        this.data.image_id = image;
        return this;

    }
    setVoteValue(value){
        this.data.value = value;
        return this;
        
    }

    /***************************************** Non MANDATORY FIELDS ******************************************************/
    setSubId(subid)
    {   
        this.data.sub_id = subid;
        return this;
    }
}

module.exports = voteAPIRequestBuilder;

