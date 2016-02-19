var append = require('./append')


module.exports = function(text, htmlID, jsonID){ 
  $(document).ready(function () {
    $(htmlID).append("<input type='checkbox' value='itemName' id='" + jsonID + "' >" + text + "<br>")
  })
}