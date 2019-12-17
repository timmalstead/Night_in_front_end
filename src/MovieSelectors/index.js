import React from "react"

import { FormStyle } from "../RecipeSelectors/style.js"

const Selector = props => {
  return (
    <div>
      <FormStyle onSubmit={props.pickMovie}>
        <select onChange={props.changeGenre}>
          <option vaule="">Select Movie Genre</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
          <option value="Romance">Romance</option>
          <option value="Animation">Animated</option>
          <option value="Drama">Drama</option>
          <option value="Sci-fi">Sci-Fi</option>
          <option value="Crime">Crime</option>
          <option value="Mystery">Mystery</option>
          <option value="Adventure">Adventure</option>
          <option value="Thriller">Thriller</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Musical">Musical</option>
          <option value="Silent">Silent</option>
          <option value="Western">Western</option>
          <option value="War">War</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
        </select>
        <button type="submit">Get Movie</button>
      </FormStyle>
    </div>
  )
}

export default Selector
