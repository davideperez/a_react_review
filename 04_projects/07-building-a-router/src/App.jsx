import { lazy, Suspense } from 'react'
import './App.css'
import { Router } from './Router'
import Route from './pages/Route'

// import HomePage from './pages/Home' // Ruta reemplazada por lazy loading.
import Page404 from './pages/404'
import SearchPage from './pages/Search'

// - Implementacion de componentes Lazy -

// import AboutPage from './pages/About' // Esto es un import estatico.
// const import('./pages/About.jsx')// Y esto es un import dinámico. Este import devuelve una promesa.

// Si al lazy() solo lo implementamos como vemos en la linea de abajo, React tirara un error
// y esto es porque hay que indicarle a React que parte de la UI no va a estar disponible desde el
// principio. Esto se hace con el wrapper <Suspense></Suspense>
// const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

/*
  Button not being an anchor, have accesibility issues.
  No basic menu props on the browser are offered.
  No open in a new windows possible.
*/

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      {/*
        En fallback se puede poner algun loader, ej: <div>Loading...</div>
        Ponemos el null para que no pegue un salto, ya que no ahce falta el loader.
      */}
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
