var getRequest = require('./components/getRequest')
var extractFridgeList = require('./components/extractFridgeList')
var addListener = require('./components/addListener')
var getRequest = require('./components/getRequest')
var jquery = require('jquery')
var postRequest = require('./components/postRequest')
var getRecipeText = require('./components/configureAPI.js').getRecipeText
var makeRecipeArray = require('./components/configureAPI.js').makeRecipeArray



getRequest('http://localhost:3000/fridge', extractFridgeList)

jquery(document).ready(function() {
	addListener()
})