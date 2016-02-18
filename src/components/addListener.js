var jquery = require('jquery') //will this conflict with cdn jquery

module.exports = function(){

		jquery('#foodButton').click(function(e) {
			e.preventDefault()
			console.log('click')
		})
	}
