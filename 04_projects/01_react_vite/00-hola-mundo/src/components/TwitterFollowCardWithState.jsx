import { useState } from 'react'
import PropTypes from 'prop-types'
import '../App.css'

TwitterFollowCardWithState.propTypes = {
  formatUserName: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired,
};

export function TwitterFollowCardWithState ({formatUserName, userName='Unknown' , name='Unknown', initialIsFollowing}) {
  /* 
    // 01 el useState
    
    // Estas 3 lineas, son equivalentes...
    const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1]

    //... a esta:
    const [isFollowing, setIsFollowing] = useState(false)

  */

  /* 
    //02 Usar Props para inicializar el estado
    // En lugar de inicializar el estado desde dentro del componente, es bueno cuidar
    // si nuestro escenario requiere que ese estado sea inicializado desde afuera por una prop. 
    // A esta prop es buena practica llamarla poniendo "initial" en su nombre.

    // No hacer:
    const [isFollowing, setIsFollowing] = useState(false)

    //Si hacer:

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
  */

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing) 
  }
  
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          alt={`Avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong className='tw-followCard-text'>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
  </article>
  )
}
