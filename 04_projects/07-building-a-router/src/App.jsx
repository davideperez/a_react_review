import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  // Cambia la url de la barra de navegacion
  window.history.pushState({}, '', href)
  // Crea un evento personalizado
  const navigationEvent = new Event(NAVIGATION_EVENT)
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

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
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
