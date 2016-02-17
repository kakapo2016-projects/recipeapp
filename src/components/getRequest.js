var request = require('superagent')

//get request for items in database
var getRequest = function(callBack) {

	request
		.get('http://localhost:3000/fridge')
		.end(function(err, res) {
			callback(res.body)
			console.log('Getting items')
		}
	)
}

module.exports = getRequest