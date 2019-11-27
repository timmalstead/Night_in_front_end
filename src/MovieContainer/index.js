import React, { Component } from 'react';

import MovieSelectors from '../MovieSelectors'
import MovieRender from '../MovieRender'
import MovieSaver from '../MovieSaver'
import RecipeStyle from '../RecipeContainer/style.js'

class MovieContainer extends Component {

  state = {
    movies: [],
    selectedGenre : undefined,
    selectedMovie : undefined,
    showDeleteMovieButton : false
  }

  componentDidMount(){
    this.getMovies();
  }

  getMovies = async () => {
    try{
      const movies = await fetch(`${process.env.REACT_APP_API_URL}/movie/`);
      const parsedMovies = await movies.json();
      this.setState({
        movies: parsedMovies.data
      })
    } catch(err){
      console.log(err)
    }
  }

  changeGenre = (e) => {
    this.setState({
      selectedGenre : e.target.value
    })
  }

  pickMovie = (e) => {
    e.preventDefault()
    const moviesInGenre = this.state.movies.filter(movie => movie.genre === this.state.selectedGenre)
    const randomMovieNumber = Math.floor(Math.random() * moviesInGenre.length)
    this.setState({
      selectedMovie : moviesInGenre[randomMovieNumber],
      showDeleteMovieButton : false
    })
  }

  requestSavedMovie = (e) => {
    // console.log(typeof(e.target.value))
    const movieFilter = this.state.movies.findIndex(movie => movie.id === Number(e.target.value))
    // console.log(movieFilter)
    this.setState({
      // selectedMovie : this.state.movies[Number(e.target.value) - 1],
      selectedMovie : this.state.movies[movieFilter],
      showDeleteMovieButton : true
    })
  }

  render(){
    return(
      <RecipeStyle>
        <main>
            <MovieSelectors 
            changeGenre = {this.changeGenre}
            pickMovie = {this.pickMovie}
            />
            {this.props.isLogged ? <MovieSaver 
            requestSavedMovie={this.requestSavedMovie} 
            selectedMovie={this.state.selectedMovie} 
            loggedUserId = {this.props.loggedUserId} 
            showDeleteMovieButton = {this.state.showDeleteMovieButton}
            /> : null}
            <MovieRender 
            selectedMovie = {this.state.selectedMovie}
            />
        </main>
      </RecipeStyle>
    )
  }
}
 
export default MovieContainer