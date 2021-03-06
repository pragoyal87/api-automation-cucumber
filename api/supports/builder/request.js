class RequestBuilder {
    constructor (data) {
      console.log("data input value " +data)
      this.data = data;
      console.log('this data ' +JSON.stringify(this))
  
      return this;
    }
  
    get () {
      return this.data;
    }
  }
  
  module.exports = RequestBuilder;
  