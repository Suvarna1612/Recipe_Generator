export default function Ingredients(props){
   
    const ingredientItems = props.ingredients.map(ingredient=>(
        
        <li key={ingredient}>{ingredient}</li>
    ))
    return (
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className='ingredientsList' aria-live='polite'>{ingredientItems}</ul> 
                {props.ingredients.length > 3 ?<div className='get-recipe'>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a Recipe</button>
                </div> : null}
            </section> 
    )
}