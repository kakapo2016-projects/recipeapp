var jquery = require('jquery') //will this conflict with cdn jquery
var postRequest = require('./postRequest')
var putRequest = require('./putRequest')
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
		jquery('#food_list').delegate(".chkbx","change",(function(e) {

		    if(this.checked) {
		        //Do stuff
						console.log("check thischanged", e.target.id)
						var item = {}
						item["ID"] = e.target.id
						item["item"] = e.target.value
						item["location"] = "pantry"
						putRequest('http://localhost:3000/updateItem', item)

		    }
		}));
		// jquery('#food_list').on("chkbx","change",(function(e) {
		// 	console.log("checkbox")
		// 	console.log( $( this ).text() );
		// 		if(this.checked) {
		// 				//Do stuff
		// 				console.log("check thischanged")
		// 		}
		// }));

	}
