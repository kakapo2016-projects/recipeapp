var $ = require('jquery')

module.exports = function(){
	$(document).ready(function(){
	$('#foodButton').submit(function(e) {
		e.preventDefault()
		console.log('click')
		})
	})
}
