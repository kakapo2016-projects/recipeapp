var addListener = require('./components/addListener')
var getRequest = require('./components/getRequest')
var append = require('./components/append')
var jquery = require('jquery')
var postRequest = require('./components/postRequest')

append('Hello Gay', "#food_list")

jquery(document).ready(function() {
	addListener()
})