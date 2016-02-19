var append = require('./append.js')
var getRequest = require('./getRequest')
var appendToShop = require('./appendToShop')


function extractFridgeList (jsonObject, callback) {
  var shopArr = []
  var pantryArr = []
  for (var i =0; i < jsonObject.fridge.length; i++) {
    if (jsonObject.fridge[i].location === "pantry") {
        pantryArr.push(jsonObject.fridge[i])
        //export to pantry list
    } else {
      shopArr.push(jsonObject.fridge[i])
    }
  }
  callback(shopArr, appendToShop)
}



module.exports = extractFridgeList