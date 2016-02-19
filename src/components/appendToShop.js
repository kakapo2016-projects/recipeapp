var append = require('./append')
var jquery = require('jquery')



module.exports = function(text, jsonID){
  jquery(document).ready(function () {
    jquery("#food_list").append("<input type='checkbox' class='chkbx' value='"+ text + "' id='" + jsonID + "' >" + text + "<br>")
    console.log(text)
  })
}
