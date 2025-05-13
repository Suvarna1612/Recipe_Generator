import React from 'react';
import Recipe from './Recipe';
import Ingredients from './Ingredients';
import { getRecipeFromMistral } from '../../ai';
export default function Main() {

    const [ingredients , setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])


    const [recipeShown ,setRecipeShown] = React.useState(false);
    const [recipe,setRecipe ] = React.useState("");

    async function getRecipe(){
        const recipegen = await getRecipeFromMistral(ingredients);
        setRecipe(recipegen);
        
    }

    function handleSubmit(formdata){
        const newIngredient = formdata.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients,newIngredient])
    }
    return (
        <main>
            <form  action={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 ? <Ingredients 
                                            ingredients={ingredients}
                                        getRecipe={getRecipe} /> : null}

            {recipeShown && <Recipe recipe={recipe}/>}
            
        </main>
    )
}