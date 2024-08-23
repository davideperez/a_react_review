import { EVENTS } from './consts'

export default function navigate (href) {
  // Cambia la url de la barra de navegacion
  window.history.pushState({}, '', href)
  // Crea un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  // Se envia el evento
  window.dispatchEvent(navigationEvent)
}
