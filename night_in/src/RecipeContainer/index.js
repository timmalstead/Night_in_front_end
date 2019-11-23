import React, { Component } from 'react';
import RecipeSelectors from '../RecipeSelectors'
import RecipeRender from '../RecipeRender'
import RecipeStyle from './style.js'

class RecipeContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
       recipeCatergory : undefined,
       selectedRecipe : undefined
      }
  }

  getRecipe = async (e) => {
    e.preventDefault()
    if (this.state.recipeCatergory) {
        try {
            const recipeCatergory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.state.recipeCatergory}`, {"method": "GET"})
            const parseRecipeCatergory = await recipeCatergory.json()
            const randomRecipeNum = Math.floor(Math.random() * parseRecipeCatergory.meals.length)
            const randomRecipeId = parseRecipeCatergory.meals[randomRecipeNum].idMeal
            const finalRecipe = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipeId}`, {"method" : "GET"})
            const parseFinalRecipe = await finalRecipe.json()
            this.setState({
                selectedRecipe : parseFinalRecipe.meals[0]
              })
        } catch (err) {
            console.log(err)
        }
    }

}

    changeRecipeCatergory = (e) => {
        this.setState({
        recipeCatergory : e.target.value
        })
    }

  render(){
    return(
      <RecipeStyle>
        <main>
          <RecipeSelectors 
          changeRecipeCatergory={this.changeRecipeCatergory}
          getRecipe={this.getRecipe}
          />
          <RecipeRender 
          selectedRecipe={this.state.selectedRecipe}
          />
        </main>
      </RecipeStyle>
    )
  }
}

export default RecipeContainer