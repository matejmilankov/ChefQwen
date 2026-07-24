import ReactMarkdown from 'react-markdown'

export function ClaudeRecipe({ recipe }) {
    return(
        <section className='suggested-recipe-container'>
            <h2>Chef Qwen Recommends:</h2>
            <ReactMarkdown>
                {recipe}
            </ReactMarkdown>
        </section>
    );
}