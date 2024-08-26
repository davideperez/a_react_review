import { describe, it, expect, beforeEach, vi, fireEvent } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Router } from './Router.jsx'
import { Route } from './pages/Route.jsx'
import { Link } from './Link'
import { getCurrentPath } from './utils/getCurrentPath'

// Queremos que haga un mock de utils.js.
// Le decimos con una funcion anonima, que tiene que devolver.
// En este caso le vamos a decir que utils.js tiene que devolver, que la funcion
// getCurrentPath, aunque puede ser lo que uno quiera, que en este caso
// sea, una funcion de vitest (en este caso vi.fn()).
// Esta funcion tiene la caracteristica de que le podemos
// indicar lo que queremos que devuelva para cada escenario.
vi.mock('./utils/getCurrentPath.js', () => ({
  getCurrentPath: vi.fn()
}))

/*
describe('Router', () => {
  it('should work', () => {
    expect(1).toBe(1)
  })
})
 */

// Este Render asi vacio, es bueno para validar
// que nuestro componente renderea.
//
describe('Router', () => {
  beforeEach(() => {
    // Limpia todo lo rendereado por el test anterior antes de
    // ejecutar el siguiente test.
    cleanup()
    // Limpia los mocks antes de cada test.
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    // Le decimes que getCurrentPath tiene qu eretornar '/about'
    getCurrentPath.mockReturnValue('/about')
    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]
    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using links', async () => {
    // Usamos la variante con 'once', para
    getCurrentPath.mockReturnValueOnce('/')
    console.log('Hi! from testing!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

    render(
      <Router>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )
    // Click on the link
    const anchor = screen.getByText(/Go to About/)
    // console.log('anchor: ', anchor)
    fireEvent.click(anchor)

    const aboutTitle = await screen.findByText('About')

    // console.log('screen.debug(): ', screen.debug())
    expect(aboutTitle).toBeTruthy()
  })
})
