import { useState } from "react";
import { ClaudeRecipe } from "./components/ClaudeRecipe";
import { IngredientsList } from "./components/IngredientsList";
import { getRecipeFromMistral } from "./ai";


export function Chat() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
    const [recipe, setRecipe] = useState("");
    const [error, setError] = useState("");
    const [isGenereatingRecipe, setIsGeneratingRecipe] = useState(false);
    
    const checkIngredients = (ingredient) => {
        return ingredients.some(
            item => item.toLowerCase() === ingredient.toLowerCase()
        );
    }

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");

        if(!newIngredient) {
            setError("You must enter an ingredient.");
            return;
        }

        if(checkIngredients(newIngredient)) {
            setError("Try adding different an ingredient.");
            return;
        }

        setIngredients(prev => [...prev, newIngredient]);
        setError("");
    }

    const removeIngredient = (ingredient) => {
        setIngredients(prev => (
            prev.filter(item => item != ingredient)
        ));
    }

    const getRecipe = async () => {
        setIsGeneratingRecipe(true);
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
        //setIsGeneratingRecipe(false);
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
            <p className="error-msg">{error}</p>
            {ingredients.length > 0 && (
                <IngredientsList 
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                    getRecipe={getRecipe}
                    removeIngredient={removeIngredient}
                    isGenereatingRecipe={isGenereatingRecipe}
                />
                )}

            {recipe && (<ClaudeRecipe recipe={recipe}/>)}
        </main>
    );
}