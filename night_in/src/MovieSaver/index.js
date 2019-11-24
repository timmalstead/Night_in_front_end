import React, { Component } from 'react';
import {FormStyle} from '../RecipeSaver/style.js'

class MovieSaver extends Component {
  
    state = {

    }

    getSavedRecipes = async () => {
        try{
            const movies = await fetch(process.env.REACT_APP_API_URL + '/saved_movie/1');
            const parsedMovies = await movies.json();
            if (parsedMovies.status.code === 200) {
                console.log(parsedMovies, "query sucessful")
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
                <option>Saved Movies</option>
            </select>
            <button type="submit">Save Movie</button>
        </FormStyle>
    )
  }
}

export default MovieSaver