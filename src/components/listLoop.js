var append = require('./append')

function listLoop (arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], '#food_list')
  }
}

module.exports = listLoop