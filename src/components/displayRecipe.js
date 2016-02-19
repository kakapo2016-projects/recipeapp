var jquery = require('jquery')


var recipeHeading = 'Eggs Benedict'

var recipeImage = '<img src="/images/eggsbenedict.jpg">'

var recipeContent = "<h3>Ingredients</h3><ul><li>6 tbsp hollandaise sauce</li><li>6 large, very fresh eggs</li><li>12 slices pancetta, grilled until crisp</li><li>3 English muffins, split in half horizontally</li><li>a little butter</li></ul><h3>Method</h3><ul><li>Preheat the grill to its highest setting.</li><li>Poach the eggs in a pan of boiling water.</li><li>When the pancetta is cooked, keep it on a warm plate while you lightly toast the split muffins on both sides.</li><li>Now butter the muffins and place them on the baking tray, then top each half with two slices of pancetta.</li><li>Put a poached egg on top of each muffin half and then spoon over the hollandaise, covering the egg (there should be a little over 1 tablespoon of sauce for each egg).</li><li>Now flash the Eggs Benedict under the grill for just 25-30 seconds, as close to the heat as possible, but do not take your eyes off them - they need to be tinged golden and no more. This should just glaze the surface of the hollandaise. Serve straight away on hot plates.</li></ul>"

module.exports = function(){

jquery('#displayRecipe').click(function() {
		console.log('click')
		jquery('#recipeTitle').append(recipeHeading)
		jquery('#recipeImage').append(recipeImage)
		jquery('#recipeBody').append(recipeContent)
	})
}
