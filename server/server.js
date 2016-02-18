var express = require('express')
var fs = require('fs')
var cors = require('cors')
var path = require('path')
var app = express()

app.use(cors({
  origin: 'http://localhost:9966'
}))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/fridge', function (req, res) {
  console.log("in get")
   var fullPath = '../data/db.json'
      fs.readFile('/home/gay/workspace/recipeapp/data/db.json', 'utf8', function(err, data) {
      if (err) {
        console.log("error", err);
      } else {
      //  var fridge = data.fridge;
      //  res.json(data);
       res.json(JSON.parse(data))
      }
     })
  // res.send("send")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})


// path.join(__dirname, '../data/db.json')
