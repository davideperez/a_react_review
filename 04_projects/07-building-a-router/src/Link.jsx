import { EVENTS, BUTTON } from './utils/consts'

export function navigate (href) {
  // Cambia la url de la barra de navegacion
  window.history.pushState({}, '', href)
  // Crea un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  // Se envia el evento
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    // Chequea si se hace click principal (izq)
    const isMainEvent = event.button === BUTTON.primary
    // Chequea si se esta presionando alguna tecla
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    //
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      // El preventDefault previene que se anule la logica de navigate.
      // Sin el preventDefault, la pagina se vuelve a cargar.
      event.preventDefault()
      navigate(to) // SPA Navigation
    }
  }

  return <a onClick={handleClick} target={target} href={to} {...props} /> // El children pasa en props. (props.children)
}
