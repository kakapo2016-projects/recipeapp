var request = require('superagent')
var $ = require('jquery')

var testData = "This is test data"


module.exports = function(){ 
  $(document).ready(function () {
    $("#food_list").append("<li>" + testData + "</li>")
    console.log('lovely')
  })
}


