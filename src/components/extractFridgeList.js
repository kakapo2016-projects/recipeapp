var append = require('./append.js')
var getRequest = require('./getRequest')


function extractFridgeList (jsonObject, callback) {
  var arrList = []
  for (var i =0; i < jsonObject.fridge.length; i++) {
    arrList.push(jsonObject.fridge[i].item)
  }
  callback(arrList, append)
}

module.exports = extractFridgeList