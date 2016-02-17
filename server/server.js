var express = require('express')
var fs = require('fs')
var cors = require('cors')

var app = express()

app.use(cors({
  origin: 'http://localhost:9966'
}))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/fridge', function (req, res) {
  var fullPath =  path.join(__dirname, '/../data/db.json');
    fs.readFile(fullPath, 'utf8', function(err, data) {
      if (err) {
        console.log("error", fullPath);
      } else {
        var fridge = JSON.parse(data);
        res.json(fridge);
      }
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
