import React, { Component } from 'react';
import MovieSaverRender from '../MovieSaverRender'
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

    saveMovie = async (e) => {
        e.preventDefault()
        if (this.props.selectedMovie) {
        try {
          const movieToSave = { user : this.props.loggedUserId, movie_id : this.props.selectedMovie.id}
          const movieResponse = await fetch(process.env.REACT_APP_API_URL + '/saved_movie/', {
            method: 'POST',
            body: JSON.stringify(movieToSave),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const parsedMovie = await movieResponse.json()
          console.log(parsedMovie)
          this.setState({
            savedMovies : [...this.state.savedMovies, parsedMovie.data]
          })
        } catch (err) {
          console.log(err)
          }
        }
      }

    deleteMovie = async () => {
        const savedMovieFilter = this.state.savedMovies.filter(movies => this.props.selectedMovie.id === movies.movie_id.id)
        const deleteMovieCall = await fetch(process.env.REACT_APP_API_URL + '/saved_movie/' + savedMovieFilter[0].id, {
            method: 'DELETE',
            credentials: 'include'
          })
        const parsedMovieCall = await deleteMovieCall.json()
        console.log(parsedMovieCall)
        this.setState({
            savedMovies : this.state.savedMovies.filter(movie => movie.id !== savedMovieFilter[0].id)
        })
    }

    render(){
    return(
        <FormStyle onSubmit={this.saveMovie}>
            <MovieSaverRender savedMovies={this.state.savedMovies} requestSavedMovie={this.props.requestSavedMovie}/>
            <button type="submit">Save Movie</button>
            {this.props.showDeleteMovieButton ? <button type="button" onClick={this.deleteMovie}>Delete</button> : null}
        </FormStyle>
    )
  }
}

export default MovieSaver