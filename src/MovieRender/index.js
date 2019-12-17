import React from "react"

import RenderStyle from "./style.js"

const MovieRender = props => {
  const selectedMovie = () => {
    if (props.selectedMovie) {
      return (
        <div className="movie-holder">
          <a
            href={props.selectedMovie.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Selected Movie" src={props.selectedMovie.image} />
          </a>
          <h2>{props.selectedMovie.title}</h2>
          <h3>{props.selectedMovie.year}</h3>
        </div>
      )
    }
  }

  return <RenderStyle>{selectedMovie()}</RenderStyle>
}

export default MovieRender
