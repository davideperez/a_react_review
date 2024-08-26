import { useState, useEffect, Children } from 'react'
import { getCurrentPath } from './utils/getCurrentPath'
import { EVENTS } from './utils/consts'
import { match } from 'path-to-regexp'

// Recibe una ruta string, devuelve un componente que sera rendereado.
export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) { // NUEVA URL
  console.log('children: ', children)

  // URL ACTUAL
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  //
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  // Recibe: los los <Route > components que creamos y que son hijos de este Router component.
  // Devuelve: un array de objetos con su path property y component property.
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    // console.log('children: ', children)
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })
  // Recibe: El array de rutas de la app pasada que se le paso por props,
  // y el array de rutas de l/os children/s.
  // Devuelve: Un array que concatena los dos array anteriores.
  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  // DESCIPTION TO COMPLETE
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
    // matched.params.query === 'javascript'.
    routeParams = matched.params // En este params tendremos por ejemplo: { query: 'javascript' }
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
