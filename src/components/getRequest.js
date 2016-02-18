var request = require('superagent')

//get request for items in database


var getRequest = function(url) {

	request
		.get(url)
		.end(function(err, res) {
			// append(res.body)
			console.log(res.body)
			return res.body
		}
	)
}
getRequest('http://localhost:3000/fridge')

module.exports = getRequest