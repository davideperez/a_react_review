import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

/*
  In the previous commit we achieved a Single Page Application.
  But if the user navigates back using the back button on the browser..
  .. the url changes to the previous one, but the previous page does not load.
  This is because we are not listening the navigation when it goes back..
  .. this will be achieved with the 'popstate'.
*/

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
