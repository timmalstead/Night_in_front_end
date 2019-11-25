import React, { Component } from 'react';
import RecipeSaverRender from '../RecipeSaverRender'
import {FormStyle} from './style.js'

class RecipeSaver extends Component {
  
    state = {
        savedRecipes : []
    }

    getSavedRecipes = async () => {
        try{
            const recipes = await fetch(process.env.REACT_APP_API_URL + '/saved_food/' + this.props.loggedUserId);
            const parsedRecipes = await recipes.json();
            if (parsedRecipes.status.code === 200) {
                console.log(parsedRecipes)
                this.setState({
                    savedRecipes : parsedRecipes.data
                })
            }
        } catch(err){
            console.log(err)
        }
    }

    componentDidMount(){
        this.getSavedRecipes()
    }

    saveRecipe = async (e) => {
        e.preventDefault()
        if (this.props.selectedRecipe) {
            try {
                const recipeToSave = {user : this.props.loggedUserId, meal_id : this.props.selectedRecipe.idMeal, recipe_title : this.props.selectedRecipe.strMeal}
                const recipeResponse = await fetch(process.env.REACT_APP_API_URL + '/saved_food/', {
                    method: 'POST',
                    body: JSON.stringify(recipeToSave),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                  const parsedRecipeResponse = await recipeResponse.json()
                  console.log(parsedRecipeResponse)
                  this.setState({
                      savedRecipes : [...this.state.savedRecipes, parsedRecipeResponse.data]
                  })
            } catch (err) {
                console.log(err)
            }
        }
    }
    
    deleteRecipe = async () => {
        const savedRecipeFilter = this.state.savedRecipes.filter(recipe => this.props.selectedRecipe.idMeal === recipe.meal_id)
        console.log(savedRecipeFilter)
        const deleteRecipeCall = await fetch(process.env.REACT_APP_API_URL + '/saved_food/' + savedRecipeFilter[0].id, {
            method: 'DELETE',
            credentials: 'include'
          })
        const parsedDeleteRecipeCall = await deleteRecipeCall.json()
        console.log(parsedDeleteRecipeCall)
        this.setState({
            savedRecipes : this.state.savedRecipes.filter(recipe => recipe.id !== savedRecipeFilter[0].id)
        })
    }

    render(){
    return(
        <FormStyle onSubmit={this.saveRecipe}>
            <RecipeSaverRender 
            savedRecipes = {this.state.savedRecipes}
            requestSavedRecipe={this.props.requestSavedRecipe}
            />
            <button type="submit" >Save Recipe</button>
            {this.props.showRecipeDeleteButton ? <button type="button" onClick={this.deleteRecipe}>Delete</button> : null}
        </FormStyle>
    )
  }
}

export default RecipeSaver