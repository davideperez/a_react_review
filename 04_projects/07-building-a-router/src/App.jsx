import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Pagina de ejemplo para crear React Router desde cero.</p>
      <a href='/about'>Sobre Nosotros</a>
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
      <a href='/'>Ir a la Home</a>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
