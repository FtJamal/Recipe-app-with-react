import React from "react";


const Recipecard = ({ title, ingredients, calories, image }) => {

    return (
        <div>
            <div>
                <h2>{title}</h2>

                <div>
                    <p>
                        <h4>Ingredients</h4>
                        {ingredients.map((ingredient) => (
                            <ol>
                                <li>{ingredient.text}</li>
                            </ol>
                            
                        ))}
                    </p>
                </div>

                <p>
                    <img src={image} alt="" />
                </p>

            </div>

        </div>
    )
}
export default Recipecard;