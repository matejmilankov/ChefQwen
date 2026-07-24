export function IngredientsList(props) {

    const clearAllIngridents = () => {
        props.setIngredients([]);
    }

    return (
        <section>
            <div className="ingredients-list-heading">
                <h2>Ingredients on hand:</h2>
                <button onClick={clearAllIngridents}>Clear all</button>
            </div>
            <div className="ingredients-list" aria-live="polite">
                {props.ingredients.map(ingredient => (
                    <div key={ingredient} className="added-ingredient" onClick={() => props.removeIngredient(ingredient)}>
                        <div className="remove">
                            <div className="minus"></div>
                        </div>
                        <p>{ingredient}</p>
                    </div>
                ))}
            </div>

            {props.ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button 
                        onClick={props.getRecipe}
                        disabled={props.isGenereatingRecipe}
                    >
                        Get a recipe
                    </button>
                </div>
            )}
        </section>
    );
}