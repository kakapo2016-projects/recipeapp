var express = require('express')
var fs = require('fs')
var cors = require('cors')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var Guid = require('guid')

//var Guid = new guid()

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
  var item = req.body
//  console.log("newguid", ID)
  var ID = newGuid()   // get a new guid
  item["ID"] = ID

  // hard code an item
  //var item = '{"item":"tomatoes"}'
  var thisPath = (__dirname + '/../data/db.json')
   fs.readFile(thisPath, 'utf8', function(err, data) {
     if (err) {
       console.log("error", thisPath);
     } else {

        var itemsData = JSON.parse(data);        // convert to an array
        // console.log("read", itemsData.fridge)
        var itemsArray = itemsData.fridge
        itemsArray.push(item);          // push the new item to the array of items
        console.log(itemsArray)
        itemsData.fridge = itemsArray
        var newFridgeData = JSON.stringify(itemsData)

        console.log("string to write", newFridgeData)

        fs.writeFile(thisPath, newFridgeData, 'utf8', function(err, data){
          if (err){
            console.log('error in write')
          } else {
            res.send(newFridgeData)
          }

        })

      }
   })
  // res.send(item)
})


app.put('/updateItem', function (req, res) {
  console.log("in put", req.body)
  var item = req.body
  // test with a hard-coded item
  var thisPath = (__dirname + '/../data/db.json')
   fs.readFile(thisPath, 'utf8', function(err, data) {
     if (err) {
       console.log("error", thisPath);
     } else {
        var itemsData = JSON.parse(data);        // convert to an array
        var itemsArray = itemsData.fridge
        // loop through the array to find the matching item
        itemsArray.map(function(x){
          if (x.ID == item.ID) {
            x.item = item.item
            x.ID = item.ID
            x.location = item.location
            console.log('x', x)
          }
        })
        // update the item's fields
        console.log(itemsArray)
        itemsData.fridge = itemsArray
        var newFridgeData = JSON.stringify(itemsData)
      //  console.log("string to write", newFridgeData)
        fs.writeFile(thisPath, newFridgeData, 'utf8', function(err, data){
          if (err){
            console.log('error in write')
          } else {
            res.send(newFridgeData)
          }
        })
      }
   })
})


// not yet completed
// app.delete('/removeItemFromFridge', function (req, res) {
//   console.log("in delete", req.body)
//   var itemID = req.body
//   var thisPath = (__dirname + '/../data/db.json')
//    fs.readFile(thisPath, 'utf8', function(err, data) {
//      if (err) {
//        console.log("error", thisPath);
//      } else {
//         var itemsData = JSON.parse(data);        // convert to an array
//         // console.log("read", itemsData.fridge)
//         var itemsArray = itemsData.fridge
//         // remove the item from the array based on the ID
//         for (var i = 0; i < itemArray.length; i++){
//           if (itemsArray[i].ID == itemID){
//             itemsArray.
//           }
//         }
//         console.log(itemsArray)
//         itemsData.fridge = itemsArray
//         var newFridgeData = JSON.stringify(itemsData)
//         console.log("string to write", newFridgeData)
//         // write the newFridgeData back to the db.json
//         fs.writeFile(thisPath, newFridgeData, 'utf8', function(err, data){
//           if (err){
//             console.log('error in write')
//           } else {
//             res.send(newFridgeData)
//           }
//         })
//       }
//    })
// })


function newGuid(){
  var newID = Guid.raw()
  return newID
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})


// path.join(__dirname, '../data/db.json')
