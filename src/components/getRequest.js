var request = require('superagent')
var bodyParser = require('body-parser')
var listLoop = require('./listLoop')


var getRequest = function(url, callback) {
	request
		.get(url)
		.end(function(err, res) {
                  console.log(res)
			callback(res.body, listLoop)
		}
	)
}

module.exports = getRequest