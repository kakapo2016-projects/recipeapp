var request = require('superagent')

var postRequest = function(callBack) {

	request
		.post('http://localhost:3000/fridge')
		.send(     )
		.end(function(err, res) {
			if (err) throw err;
			console.log('Adding item')
			console.log(JSON.stringify(res.body))
		}
	)
}

module.exports = postRequest
