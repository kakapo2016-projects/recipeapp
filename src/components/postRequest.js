var request = require('superagent')


var postRequest = function(newItem, callBack) {

	request
		.post('http://localhost:3000/fridge')
		.send(newItem)
		.end(function(err, res) {
			if (err) throw err;
			console.log('Adding item')
			console.log(JSON.stringify(newItem))
		}
	)
}

module.exports = postRequest
