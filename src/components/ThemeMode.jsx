export function ThemeMode(props) {
  const toggleMode = () => {
    props.setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="themes">
      <div 
        onClick={toggleMode} 
        className={`themes-relative ${props.isDarkMode ? 'active' : ''}`}
      >
        <div className={`theme-label ${!props.isDarkMode ? 'active' : ''}`}>L</div>
        <div className={`theme-label ${props.isDarkMode ? 'active' : ''}`}>D</div>
        <div className="circle"></div>
      </div>
    </div>
  );
}