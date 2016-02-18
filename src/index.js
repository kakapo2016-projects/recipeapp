var getRequest = require('./components/getRequest')
var extractFridgeList = require('./components/extractFridgeList')
var addListener = require('./components/addListener')
var getRequest = require('./components/getRequest')
var jquery = require('jquery')
var postRequest = require('./components/postRequest')

getRequest('http://localhost:3000/fridge', extractFridgeList)

jquery(document).ready(function() {
	addListener()
})

