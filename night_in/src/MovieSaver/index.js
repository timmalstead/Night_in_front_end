import React, { Component } from 'react';
import {FormStyle} from '../RecipeSaver/style.js'

class MovieSaver extends Component {
  
    state = {
        savedMovies : []
    }

    getSavedMovies = async () => {
        try{
            const movies = await fetch(process.env.REACT_APP_API_URL + '/saved_movie/' + this.props.loggedUserId);
            const parsedMovies = await movies.json();
            if (parsedMovies.status.code === 200) {
                console.log(parsedMovies, "query sucessful")
                this.setState({
                    savedMovies : parsedMovies.data
                })
            }
        } catch(err){
            console.log(err)
        }
    }

    componentDidMount(){
        this.getSavedMovies()
    }


    render(){
    return(
        <FormStyle onSubmit={this.props.saveMovie}>
            <select>
                <option>Saved Movies</option>
            </select>
            <button type="submit">Save Movie</button>
        </FormStyle>
    )
  }
}

export default MovieSaver