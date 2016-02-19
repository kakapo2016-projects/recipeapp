var request = require('superagent')
var getRequest = require('./getRequest')
var extractFridgeList = require('./extractFridgeList')

//var posturl = 'http://localhost:3000/updateItem'
var putRequest = function(puturl, changedItem) {
//  console.log('editing', changedItem)
	request
		.put(puturl)
		.send(changedItem)
		.end(function(err, res) {
			if (err){
				console.log('error', err)
					//throw err;
			} else {
			//	console.log(res.body)
				getRequest('http://localhost:3000/fridge', extractFridgeList)

			}
		}
	)
}

module.exports = putRequest
