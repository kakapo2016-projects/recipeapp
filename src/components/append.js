var $ = require('jquery')

module.exports = function(text, htmlID, id){ 
  $(document).ready(function () {
    $(htmlID).append("<input type='checkbox' value='itemName' id='" + id + "' >" + text + "<br>")
  })
}

