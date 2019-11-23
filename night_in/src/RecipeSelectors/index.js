import React from 'react'
import {FormStyle} from './style.js'

const Selector = (props) => {

    return (
        <div>
            <FormStyle onSubmit={props.getRecipe}>
                <select onChange={props.changeRecipeCatergory}>
                    <option value="">Select Main Ingredient</option>
                        <option value="Beef">Beef</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Goat">Goat</option>
                        <option value="Lamb">Lamb</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Pork">Pork</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Side">Side Dish</option>
                        <option value="Starter">Starter</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Miscellaneous">Misc.</option>
                </select>
                <button type="submit">Get Recipe</button>
            </FormStyle>
        </div>
    )

}

export default Selector