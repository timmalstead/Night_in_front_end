import React from 'react';

function MovieSaverRender(props){

const savedMovieDisplay = props.savedMovies.map(movie => <option value={movie.movie_id.id} key={movie.id}>{movie.movie_id.title}</option>)

    return (
        <select onChange={props.requestSavedMovie}>
            <option value="">Saved Movies</option>
            {props.savedMovies.length ? savedMovieDisplay : null}
        </select>
    )
}

export default MovieSaverRender