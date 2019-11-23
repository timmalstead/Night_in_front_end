import React from 'react'
import RenderStyle from './style.js'

const RecipeRender = (props) => { 
    
    const selectedRecipe = () => {
        
        if (props.selectedRecipe) {

        const ingredientArray = []
        const measureArray = []

        for (const property in props.selectedRecipe) {
            if (props.selectedRecipe[property]) {
                if (property.startsWith('strIngredient')) {
                    ingredientArray.push(props.selectedRecipe[property])
                }
                if (property.startsWith('strMeasure')) {
                    measureArray.push(props.selectedRecipe[property])
                }
            }
        }   

        const concatArray = ingredientArray.map((ingredient, i) => ingredient.concat(` ${measureArray[i]}`))
        const finalIngredientArray = concatArray.map(ingredient => <p>{ingredient}</p>)

        const splitInstructions = props.selectedRecipe.strInstructions.split('.')
        const mappedInstructions = splitInstructions.map(instruction => <p>{instruction}.</p>)

            return <div className="recipe-holder">
                <img alt="Selected Recipe" src={props.selectedRecipe.strMealThumb}/>
                <div className="meal-details">
                    <h2>{props.selectedRecipe.strMeal}</h2>
                    <details>
                        <summary>Ingredients</summary>
                        {finalIngredientArray}
                    </details>
                    <details>
                        <summary>Instructions</summary>
                        {mappedInstructions}
                    </details>
                </div>
            </div>
        }
    }

    return (
        <RenderStyle>
            {selectedRecipe()}
        </RenderStyle>
    )

}

export default RecipeRender