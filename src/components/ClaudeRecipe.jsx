import ReactMarkdown from 'react-markdown'
import { useAutoScroll } from '../hooks/useAutoScroll';

export function ClaudeRecipe({ recipe }) {
    const recipeRef = useAutoScroll();
    return(
        <section className='suggested-recipe-container' ref={recipeRef}>
            <h2>Chef Qwen Recommends:</h2>
            <ReactMarkdown>
                {recipe}
            </ReactMarkdown>
        </section>
    );
}