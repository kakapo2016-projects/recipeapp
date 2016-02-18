var $ = require('jquery')


module.exports = function(data, id){ 
  var data2 = data
  var id2 = id
  $(document).ready(function (data2, id2) {
    $(id).append("<li>" + data + "</li>")
  })
}


