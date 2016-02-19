var getRequest = require('./components/getRequest')
var extractFridgeList = require('./components/extractFridgeList')
var addListener = require('./components/addListener')
var getRequest = require('./components/getRequest')
var jquery = require('jquery')
var postRequest = require('./components/postRequest')
var displayRecipe = require('./components/displayRecipe')
var getPantryRequest = require('./components/PantyAppend').getPantryRequest
var extractFridgeListPantry = require('./components/PantyAppend').extractFridgeListPantry

console.log(require('./components/PantyAppend'))

getPantryRequest('http://localhost:3000/fridge', extractFridgeListPantry)
getRequest('http://localhost:3000/fridge', extractFridgeList)

jquery(document).ready(function() {
	addListener()
	displayRecipe()
})

