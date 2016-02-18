var dotenv = require('dotenv')
var request = require('superagent')



// search code
var params = {q: 'chicken', sort:r}


foodToForkClient.get('search/recipes', params, function(error, recipes, response){
	if (!error) {
		makeRecipeArray(recipes)
		console.log(recipes)
	}
})

function makeRecipeArray (recipes) {
	var recipeArray = [];
	for (var i = 0; i < recipes.statuses.length; i++) {
		recipeArray.push(getRecipeText(recipes.statuses[i]))
	}
	console.log(recipeArray);
	return recipeArray;
  }


  //turns object(recipe) into a single string of recipe text
function getRecipeText (recipe) {
	return recipe.statuses.text;
}

module.exports = {getRecipeText, makeRecipeArray}