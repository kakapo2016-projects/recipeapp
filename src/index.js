var getRequest = require('./components/getRequest')
var extractFridgeList = require('./components/extractFridgeList')

getRequest('http://localhost:3000/fridge', extractFridgeList)