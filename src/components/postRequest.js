var request = require('superagent')

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
			}

		//	console.log('Adding item')
			//console.log(JSON.stringify(newItem))
		}
	)
}

module.exports = postRequest
