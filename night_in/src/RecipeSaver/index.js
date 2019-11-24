import React, { Component } from 'react';

class RecipeSaver extends Component {
  
    state = {

    }

    componentDidMount(){

    }

    getSavedRecipes = async () => {
        try{
            const recipes = await fetch(process.env.REACT_APP_API_URL + '/movie/');
            const parsedMovies = await movies.json();
            this.setState({
            movies: parsedMovies.data
            })
        } catch(err){
            console.log(err)
        }
    }

    render(){
    return(
        <form>
            <select>
                <option>Saved Recipes</option>
            </select>
            <button type="submit">Save Recipe</button>
        </form>
    )
  }
}

export default RecipeSaver