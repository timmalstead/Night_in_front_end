import React from "react"

function RecipeSaverRender(props) {
  const savedRecipeDisplay = props.savedRecipes.map(recipe => (
    <option value={recipe.meal_id} key={recipe.id}>
      {recipe.recipe_title}
    </option>
  ))

  return (
    <select onChange={props.requestSavedRecipe}>
      <option value="">Saved Recipes</option>
      {props.savedRecipes.length ? savedRecipeDisplay : null}
    </select>
  )
}

export default RecipeSaverRender
