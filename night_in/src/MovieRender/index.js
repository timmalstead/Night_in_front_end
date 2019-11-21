import React from 'react'

const MovieRender = (props) => {
    
    const selectedMovie = () => {
        if (props.selectedMovie) {
            return <div>
                        <a href={props.selectedMovie.url} target="_blank" rel="noopener noreferrer">
                            <img alt="Selected Movie" src={props.selectedMovie.image} />
                        </a>
                        <h2>{props.selectedMovie.title}</h2>
                        <h3>{props.selectedMovie.year}</h3>
                    </div>
        }
    }

    return (
        <div>
           {selectedMovie()}
        </div>
    )

}

export default MovieRender