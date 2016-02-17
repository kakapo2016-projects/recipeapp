var test = require('tape')
var getRequest = require('../src/components/getRequest')


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

	t.equal(getRequest(), expectedOutput, "Expected output matches actual output")
	t.end()
})

