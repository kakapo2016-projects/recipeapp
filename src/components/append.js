var $ = require('jquery')

module.exports = function(text, id){ 
  $(document).ready(function () {
    $(id).append("<input type='checkbox' vaule='temName'>" + text + "<br>")
  })
}

