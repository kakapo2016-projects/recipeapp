var request = require('superagent')

//get request for items in database

var getRequest = function(appendToList) {

	request
		.get('http://localhost:3000/fridge')
		.end(function(err, res) {
			appendToList(res.body)
			console.log('Getting items')
		}
	)
}

module.exports = getRequest