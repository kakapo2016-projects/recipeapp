var jquery = require('jquery') //will this conflict with cdn jquery
var postRequest = require('./postRequest')
var posturl = 'http://localhost:3000/addItemToFridge'
module.exports = function(callback){

		jquery('#foodButton').click(function(e) {
			e.preventDefault()
			console.log('click')
			var newItem = {}
			newItem["item"] = jquery('#foodItem').val()
			newItem["location"] = "shop" 
			postRequest(posturl, newItem)
		})
	}
