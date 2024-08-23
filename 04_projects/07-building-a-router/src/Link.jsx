import { EVENTS } from './consts'

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
    // El preventDefault previene que se anule la logica de navigate.
    // Sin el preventDefault, la pagina se vuelve a cargar.
    event.preventDefault()
    navigate(to)
  }
  return <a onClick={handleClick} target={target} href={to} {...props} />
}
