export function IngredientsList({ ingredients, getRecipe, removeIngredient, setIngredients }) {

    const clearAllIngridents = () => {
        setIngredients([]);
    }

    return (
        <section>
            <div className="ingredients-list-heading">
                <h2>Ingredients on hand:</h2>
                <button onClick={clearAllIngridents}>Clear all</button>
            </div>
            <div className="ingredients-list" aria-live="polite">
                {ingredients.map(ingredient => (
                    <div key={ingredient} className="added-ingredient" onClick={() => removeIngredient(ingredient)}>
                        <div className="remove">
                            <div className="minus"></div>
                        </div>
                        <p>{ingredient}</p>
                    </div>
                ))}
            </div>

            {ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                </div>
            )}
        </section>
    );
}