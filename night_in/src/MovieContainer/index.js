import React, { Component } from 'react';

class MovieContainer extends Component {
  constructor(props){
    super(props);

      this.state = {
        movies: []
      }
  }

  componentDidMount(){
    this.getMovies();
  }

  getMovies = async () => {
    try{
      const movies = await fetch(process.env.REACT_APP_API_URL + '/api/v1/movies/');
      const parsedMovies = await movies.json();
      console.log(parsedMovies)
      this.setState({
        movies: parsedMovies.data
      })
    } catch(err){
      console.log(err)
    }
  }
  render(){
    return(
      "I am the MovieContainer"
    )
  }
}
 

export default MovieContainer