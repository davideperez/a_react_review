import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

import { Router } from './Router'
import Page404 from './pages/404'
import SearchPage from './pages/Search'
import Route from './pages/Route'

/*
  Button not being an anchor, have accesibility issues.
  No basic menu props on the browser are offered.
  No open in a new windows possible.
*/

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
