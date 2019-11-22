import React from 'react'

const RecipeRender = (props) => { 

    //is there a way to use a regex to structure instuctions a bit more nicely?
    
    const selectedRecipe = () => {
        
        if (props.selectedRecipe) {

        const ingredientArray = []
        const measureArray = []
        // if (props.selectedRecipe[property])

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

        console.log(ingredientArray)
        console.log(measureArray)

        //the next thing is to remember how to map these fresh arrays. do that tommorow.

            return <div>
                <img alt="Selected Recipe" src={props.selectedRecipe.strMealThumb}/>
                <h2>{props.selectedRecipe.strMeal}</h2>
                <details>
                    <summary>Ingredients</summary>

                    {/* {props.selectedRecipe.strIngredient1 ? <p>{props.selectedRecipe.strIngredient1} {props.selectedRecipe.strMeasure1}</p> : null}
                    {props.selectedRecipe.strIngredient2 ? <p>{props.selectedRecipe.strIngredient2} {props.selectedRecipe.strMeasure2}</p> : null}
                    {props.selectedRecipe.strIngredient3 ? <p>{props.selectedRecipe.strIngredient3} {props.selectedRecipe.strMeasure3}</p> : null}
                    {props.selectedRecipe.strIngredient4 ? <p>{props.selectedRecipe.strIngredient4} {props.selectedRecipe.strMeasure4}</p> : null}
                    {props.selectedRecipe.strIngredient5 ? <p>{props.selectedRecipe.strIngredient5} {props.selectedRecipe.strMeasure5}</p> : null}
                    {props.selectedRecipe.strIngredient6 ? <p>{props.selectedRecipe.strIngredient6} {props.selectedRecipe.strMeasure6}</p> : null}
                    {props.selectedRecipe.strIngredient7 ? <p>{props.selectedRecipe.strIngredient7} {props.selectedRecipe.strMeasure7}</p> : null}
                    {props.selectedRecipe.strIngredient8 ? <p>{props.selectedRecipe.strIngredient8} {props.selectedRecipe.strMeasure8}</p> : null}
                    {props.selectedRecipe.strIngredient9 ? <p>{props.selectedRecipe.strIngredient9} {props.selectedRecipe.strMeasure9}</p> : null}
                    {props.selectedRecipe.strIngredient10 ? <p>{props.selectedRecipe.strIngredient10} {props.selectedRecipe.strMeasure10}</p> : null}
                    {props.selectedRecipe.strIngredient11 ? <p>{props.selectedRecipe.strIngredient11} {props.selectedRecipe.strMeasure11}</p> : null}
                    {props.selectedRecipe.strIngredient12 ? <p>{props.selectedRecipe.strIngredient12} {props.selectedRecipe.strMeasure12}</p> : null}
                    {props.selectedRecipe.strIngredient13 ? <p>{props.selectedRecipe.strIngredient13} {props.selectedRecipe.strMeasure13}</p> : null}
                    {props.selectedRecipe.strIngredient14 ? <p>{props.selectedRecipe.strIngredient14} {props.selectedRecipe.strMeasure14}</p> : null}
                    {props.selectedRecipe.strIngredient15 ? <p>{props.selectedRecipe.strIngredient15} {props.selectedRecipe.strMeasure15}</p> : null}
                    {props.selectedRecipe.strIngredient16 ? <p>{props.selectedRecipe.strIngredient16} {props.selectedRecipe.strMeasure16}</p> : null}
                    {props.selectedRecipe.strIngredient17 ? <p>{props.selectedRecipe.strIngredient17} {props.selectedRecipe.strMeasure17}</p> : null}
                    {props.selectedRecipe.strIngredient18 ? <p>{props.selectedRecipe.strIngredient18} {props.selectedRecipe.strMeasure18}</p> : null}
                    {props.selectedRecipe.strIngredient19 ? <p>{props.selectedRecipe.strIngredient19} {props.selectedRecipe.strMeasure19}</p> : null}
                    {props.selectedRecipe.strIngredient20 ? <p>{props.selectedRecipe.strIngredient20} {props.selectedRecipe.strMeasure20}</p> : null}                             */}
                </details>
                <details>
                    <summary>Instructions</summary>
                    <p>{props.selectedRecipe.strInstructions}</p>
                </details>
            </div>
        }
    }

    return (
        <div>
            {selectedRecipe()}
        </div>
    )

}

export default RecipeRender