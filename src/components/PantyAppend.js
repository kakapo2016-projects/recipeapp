var jquery = require('jquery')
var request = require('superagent')

var getPantryRequest = function (url, callback) {
  console.log('Fuckin dicks man')
  request
    .get(url)
    .end(function(err, res) {
      callback(res.body, listLoop)
      console.log('Fuck them all: ', res.body)
    }
  )
}

var extractFridgeListPantry = function (jsonObject, callback) {
  var shopArr = []
  var pantryArr = []
    console.log('ExtrackMotherfuckingFunction running:')
  for (var i =0; i < jsonObject.fridge.length; i++) {
    if (jsonObject.fridge[i].location === "pantry") {
        pantryArr.push(jsonObject.fridge[i])
        //export to pantry list
    } else {
      shopArr.push(jsonObject.fridge[i])
    }
  }
    console.log('ARRRRRRR:' ,pantryArr)
  callback(pantryArr, appendToPantry)

}


function listLoop (arr, callback) {
jquery("#pantry_list").empty()
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i].item, arr[i].ID)
  }
}

function appendToPantry (text, jsonID) { 
  jquery(document).ready(function () {
    jquery("#pantry_list").append("<input type='checkbox' value='itemName' id='" + jsonID + "' >" + text + "<br>")
  })
}

module.exports = { getPantryRequest: getPantryRequest, 
                               extractFridgeListPantry: extractFridgeListPantry 
                             }
