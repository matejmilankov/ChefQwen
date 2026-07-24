export function ThemeMode(props) {


    return (
        <div className="themes">
            <button onClick={ () => {props.setIsDarkMode(true);} }>Dark mode</button>
            <button onClick={ () => {props.setIsDarkMode(false);} }>Light mode</button>
        </div>
    );
}