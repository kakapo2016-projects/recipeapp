var append = require('./append')
var jquery = require('jquery')

function listLoop (arr, callback) {
jquery("#food_list").empty()
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i].item, arr[i].ID)
  }
}

module.exports = listLoop