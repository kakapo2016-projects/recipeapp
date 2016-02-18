var test = require('tape')
var getRequest = require('../src/components/getRequest')

var url = 'http://localhost:3000/fridge'

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
      }
    ]
}

test("Get request test", function (t) {
  console.log(getRequest(url))

	t.deepEqual(getRequest(url), expectedOutput, "Expected output matches actual output")
	t.end()
})

