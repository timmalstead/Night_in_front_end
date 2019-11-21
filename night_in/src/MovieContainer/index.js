import React, { Component } from 'react';
import MovieSelectors from '../MovieSelectors'

class MovieContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
        movies: [],
        selectedGenre : undefined
      }
  }

  componentDidMount(){
    this.getMovies();
  }

  getMovies = async () => {
    try{
      const movies = await fetch(process.env.REACT_APP_API_URL + '/movie/');
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
    console.log(moviesInGenre)
  }

  render(){
    return(
      <MovieSelectors 
      changeGenre = {this.changeGenre}
      pickMovie = {this.pickMovie}
      />
    )
  }
}
 

export default MovieContainer