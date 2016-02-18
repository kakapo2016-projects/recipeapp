var jquery = require('jquery') //will this conflict with cdn jquery
var postRequest = require('./postRequest')
var posturl = 'http://localhost:3000/addItemToFridge'
module.exports = function(){

		jquery('#foodButton').click(function(e) {
			e.preventDefault()
			console.log('click')
			var newItem = {}
			newItem["item"] = jquery('#foodItem').val()
			postRequest(posturl, newItem)
		})
	}
