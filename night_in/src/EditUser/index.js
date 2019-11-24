import React from 'react'
import { ReactComponent } from '*.svg'

const EditUser = (props) =>{
return (
    <div>
        <form>
            {/* user */}
            <input type="text" name="username" value={props.username}></input>
            <input type="text" name="password"></input>
            <input type="text" name="email" value= {props.email} ></input>
            {/* Food */}
            <input type="checkbox" name="beef" value={props.foodPref.beef}></input>
            <input type="checkbox" name="breakfast" value={props.foodPref.breakfast}></input>
            <input type="checkbox" name="chicken" value={props.foodPref.chicken}></input>
            <input type="checkbox" name="dessert" value={props.foodPref.dessert}></input>
            <input type="checkbox" name="goat" value={props.foodPref.goat}></input>
            <input type="checkbox" name="lamb" value={props.foodPref.lamb}></input>
            <input type="checkbox" name="miscellaneous" value={props.foodPref.miscellaneous}></input>
            <input type="checkbox" name="pasta" value={props.foodPref.pasta}></input>
            <input type="checkbox" name="pork" value={props.foodPref.pork}></input>
            <input type="checkbox" name="seafood" value={props.foodPref.seafood}></input>
            <input type="checkbox" name="side" value={props.foodPref.pork}></input>
            <input type="checkbox" name="starter" value={props.foodPref.pork}></input>
            <input type="checkbox" name="vegan" value={props.foodPref.pork}></input>
            <input type="checkbox" name="vegetarian" value={props.foodPref.pork}></input>
            {/* Movies */}
            <input type="checkbox" name="horror" value={props.moviePref.horror}></input>
            <input type="checkbox" name="comedy" value={props.moviePref.comedy}></input>
            <input type="checkbox" name="romance" value={props.moviePref.romance}></input>
            <input type="checkbox" name="animation" value={props.moviePref.animation}></input>
            <input type="checkbox" name="drama" value={props.moviePref.drama}></input>
            <input type="checkbox" name="sci_fi" value={props.moviePref.sci_fi}></input>
            <input type="checkbox" name="crime" value={props.moviePref.crime}></input>
            <input type="checkbox" name="mystery" value={props.moviePref.mystery}></input>
            <input type="checkbox" name="adventure" value={props.moviePref.adventure}></input>
            <input type="checkbox" name="thriller" value={props.moviePref.thriller}></input>
            <input type="checkbox" name="fantasy" value={props.moviePref.fantasy}></input>
            <input type="checkbox" name="musical" value={props.moviePref.musical}></input>
            <input type="checkbox" name="silent" value={props.moviePref.silent}></input>
            <input type="checkbox" name="western" value={props.moviePref.western}></input>
            <input type="checkbox" name="war" value={props.moviePref.war}></input>
            <input type="checkbox" name="action" value={props.moviePref.action}></input>
            <input type="checkbox" name="biography" value={props.moviePref.biography}></input>
        </form>
    </div>
)
}

export default EditUser;