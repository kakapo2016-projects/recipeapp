var $ = require('jquery')

module.exports = function(text, htmlID, id){
  $(document).ready(function () {
    console.log("append")
    $(htmlID).append("<input type='checkbox' value='"+ text +"' class='chkbx' id='" + id + "' >" + text + "<br>")
  })
}
