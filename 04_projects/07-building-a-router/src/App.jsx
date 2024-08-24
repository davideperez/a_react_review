import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

import { Router } from './Router'
import Page404 from './pages/404'
import SearchPage from './pages/Search'

/*
  Button not being an anchor, have accesibility issues.
  No basic menu props on the browser are offered.
  No open in a new windows possible.
*/

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  )
}

export default App
