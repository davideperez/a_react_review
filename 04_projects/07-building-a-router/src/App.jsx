import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts'

/*
  In the previous commit we achieved a Single Page Application.
  But if the user navigates back using the back button on the browser..
  .. the url changes to the previous one, but the previous page does not load.
  This is because we are not listening the navigation when it goes back..
  .. this will be achieved with the 'popstate'.
*/

function navigate (href) {
  // Cambia la url de la barra de navegacion
  window.history.pushState({}, '', href)
  // Crea un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  // Se envia el evento
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Pagina de ejemplo para crear React Router desde cero.</p>
      <button onClick={() => navigate('/about')}>Sobre Nosotros</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Foto de un bosque.' />
        <p>Hola me llamo David y estoy creando un Router desde cero.</p>
      </div>
      <button onClick={() => navigate('/')}>Ir a la Home</button>
    </>
  )
}

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
