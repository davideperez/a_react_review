import { useState, useEffect, Children } from 'react'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) { // NUEVA URL
  // URL ACTUAL
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

  let routeParams = {}

  // Agregamos las rutas que vienen en el <Route /> component.
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
    // path (NUEVA URL) es igual a la URL ACTUAL (currentPath)
    if (path === currentPath) return true

    // Usamos path-to-regexp
    // para poder detectar rutas dinamicas como por ejemplo
    // /search/:query <-- :query hace dinamica a esta ruta.
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath) // Devuelve los params
    if (!matched) return false

    // Guardamos los parametros de la url que eran dinamicos
    // y que hemos extraidos con path-to-regexp
    // por ejemplo, si la ruta es /search/:query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'
    routeParams = matched.params // En este params tendremos por ejemplo: { query: 'javascript' }
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
