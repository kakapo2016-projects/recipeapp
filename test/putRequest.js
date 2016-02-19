var test = require('tape')
var putRequest = require('../src/components/putRequest')
var listLoop = require('./listLoop')

//put request for items to be updated in the database
var expectedOutput = {
  "fridge": [
      {
        "item": "eggs",
        "ID": "d0274960-0084-64e8-cbd4-a8da61bf6886",
        "location": "pantry"
      },
      {
        "item": "mushrooms",
        "ID": "c7c4987e-3119-18b2-55fe-6defae5aa4ea",
        "location": "pantry"
      },
      {
        "item": "cheese",
        "ID": "d5da9624-964d-cc64-5451-99094f1082fa",
        "location": "pantry"
      }
    ]
}
var changedItem = {
  "item": "cheese",
  "ID": "d5da9624-964d-cc64-5451-99094f1082fa",
  "location": "shop"
}
var puturl = 'http://localhost:3000/updateItem'

var actual = putRequest(puturl, changedItem)
//console.log(newItem)
test("Put request test", function (t) {
 	t.deepEqual(actual, expectedOutput, "Expected output matches actual output")
 	t.end()
 })
