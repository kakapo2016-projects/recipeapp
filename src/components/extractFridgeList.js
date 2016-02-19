var append = require('./append.js')
var getRequest = require('./getRequest')



function extractFridgeList (jsonObject, callback) {
  var shopArr = []
  var pantryArr = []
  for (var i =0; i < jsonObject.fridge.length; i++) {
    if (jsonObject.fridge[i].location === "pantry") {
        partryArr += jsonObject.fridge[i]
        //export to pantry list
    } else {
      shopArr += jsonObject.fridge[i]
    }
  }
  callback(shopArr, append)
}



module.exports = extractFridgeList