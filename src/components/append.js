var $ = require('jquery')

module.exports = function(text, id){ 
  $(document).ready(function () {
    $(id).append("<li>" + text + "</li>")
  })
}

