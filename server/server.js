var express = require('express')
var fs = require('fs')
var cors = require('cors')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:9966'
}))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/fridge', function (req, res) {
  console.log("in get")
   var thisPath = (__dirname + '/../data/db.json')
   console.log('fullPath', thisPath)
   fs.readFile(thisPath, 'utf8', function(err, data) {
      if (err) {
        console.log("error", err);
      } else {
       res.json(JSON.parse(data))
      }
     })
  // res.send("send")
})

app.post('/addItemToFridge', function (req, res) {
  console.log("in post", req.body)
  var item = req.body.item
  // hard code an item
  //var item = '{"item":"tomatoes"}'
  var thisPath = (__dirname + '/../data/db.json')
  fs.readFile(thisPath, 'utf8', function(err, data) {
    if (err) {
      console.log("error", thisPath);
    } else {
       var itemsData = JSON.parse(data);        // convert to an array
       var itemsArray = itemsData['fridge'];
       itemsArray.push(JSON.parse(item));          // push the new item to the array of items
       fs.writeFile(thisPath, JSON.stringify(itemsArray), 'utf8', function(err, data){
         if (err){
           console.log('error')
         } else {
           res.send('POST request to addItemToFridge')
         }

       })

     }
  })
  // res.send(item)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})


// path.join(__dirname, '../data/db.json')
