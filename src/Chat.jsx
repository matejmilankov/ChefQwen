import { useState } from "react";
import { ClaudeRecipe } from "./components/ClaudeRecipe";
import { IngredientsList } from "./components/IngredientsList";
import { getRecipeFromMistral } from "./ai";


export function Chat() {
    const [ingredients, setIngredients] = useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    );

    const [recipe, setRecipe] = useState("");

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients(prev => [...prev, newIngredient]);
    }

    const removeIngredient = (ingredient) => {
        setIngredients(prev => (
            prev.filter(item => item != ingredient)
        ));
    }

    const getRecipe = async () => {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && (
                <IngredientsList 
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    removeIngredient={removeIngredient}
                />
                )}

            {recipe && (<ClaudeRecipe recipe={recipe}/>)}
        </main>
    );
}