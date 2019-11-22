import React from 'react'

const Selector = (props) => {

    return (
        <div>
            <form onSubmit={props.getRecipe}>
                <select onChange={props.changeRecipeCatergory}>
                    <option value="">What Kind of Dish Are You In The Mood For?</option>
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
            </form>
        </div>
    )

}

export default Selector