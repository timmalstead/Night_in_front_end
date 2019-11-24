import React, { Component } from 'react';
import {FormStyle} from './style.js'

class RecipeSaver extends Component {
  
    state = {

    }

    getSavedRecipes = async () => {
        try{
            const recipes = await fetch(process.env.REACT_APP_API_URL + '/saved_food/1');
            const parsedRecipes = await recipes.json();
            if (parsedRecipes.status.code === 200) {
                console.log(parsedRecipes, "query sucessful")
            }
        } catch(err){
            console.log(err)
        }
    }

    componentDidMount(){
        this.getSavedRecipes()
    }


    render(){
    return(
        <FormStyle>
            <select>
                <option>Saved Recipes</option>
            </select>
            <button type="submit">Save Recipe</button>
        </FormStyle>
    )
  }
}

export default RecipeSaver