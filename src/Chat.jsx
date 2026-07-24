import { useState } from "react";
import { ClaudeRecipe } from "./components/ClaudeRecipe";
import { IngredientsList } from "./components/IngredientsList";
import { getRecipeFromMistral } from "./ai";


export function Chat() {
    const [ingredients, setIngredients] = useState([]);

    const [recipe, setRecipe] = useState("");
    
    const checkIngredients = (ingredient) => {
        return ingredients.some(
            item => item.toLowerCase() === ingredient.toLowerCase()
        );
    }

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        if(checkIngredients(newIngredient)) {
            alert("Ingrident already exits");
            return;
        }
        setIngredients(prev => [...prev, newIngredient]);
        console.log(ingredients);
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