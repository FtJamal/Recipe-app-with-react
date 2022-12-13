import React from "react";
import "./recipecard.css"

const Recipecard = ({ title, ingredients, calories, image }) => {

    return (
        <div className="card">
            <div className="container">
                <h2>{title}</h2>

                <div className="body">
                    <div className="text">

                        <div>
                            <p>
                                <h4>Ingredients</h4>
                                {ingredients.map((ingredient) => (
                                    <ul className="list">
                                        <li >{ingredient.text}</li>
                                    </ul>

                                ))}
                            </p>
                        </div>
                    </div>
                    <p className="img">
                        <img src={image} alt="" />
                    </p>

                </div>
            </div>
            <br />

        </div>
    )
}
export default Recipecard;