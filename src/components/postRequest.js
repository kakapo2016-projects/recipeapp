var request = require('superagent')
var getRequest = require('./getRequest')
var extractFridgeList = require('./extractFridgeList')

//var posturl = 'http://localhost:3000/addItemToFridge'
var postRequest = function(posturl, newItem) {
//  console.log('adding', newItem)
	request
		.post(posturl)
		.send(newItem)
		.end(function(err, res) {
			if (err){
				console.log('error', err)
					//throw err;
			} else {
				console.log(res.body)
				getRequest('http://localhost:3000/fridge', extractFridgeList)

			}
		}
	)
}

module.exports = postRequest
