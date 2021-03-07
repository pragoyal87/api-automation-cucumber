module.exports = {

    getURL: function (job) {    
     if (job === 'build') {
            return {
                voteUK: 'https://api.thecatapi.com/v1',
                medicAnimal: 'https://jsonplaceholder.typicode.com',
            }
        }
        else if (job === 'int') {
            return {
                voteUK: 'https://api.thecatapi.com/v1',
                medicAnimal: 'https://jsonplaceholder.typicode.com',
            }
        }
    }
}