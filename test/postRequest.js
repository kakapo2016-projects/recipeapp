var test = require('tape')
var postRequest = require('../src/components/postRequest')

//post request for new items to be added to the database
var expectedOutput = {
  "fridge": [
      {
        "item": "eggs"
      },
      {
        "item": "mushrooms"
      },
      {
        "item": "cheese"
      },
			{
        "item": "butter"
      }
    ]
}
var newItem = {"item": "butter"}
var posturl = 'http://localhost:3000/addItemToFridge'
var actual = postRequest(posturl, newItem)
//console.log(newItem)
test("Post request test", function (t) {

 	t.deepEqual(actual, expectedOutput, "Expected output matches actual output")
 	t.end()
	
 })
