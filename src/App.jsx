import './App.css'
import { Header } from './components/Header'
import { Chat } from './Chat'
import { ThemeMode } from './components/ThemeMode'
import { useState, useEffect } from 'react'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <Header />
      <Chat />
      <ThemeMode setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
    </>
  )
}

export default App
