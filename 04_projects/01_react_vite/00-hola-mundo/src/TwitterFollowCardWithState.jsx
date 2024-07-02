import { useState } from 'react'
import './App.css'
import PropTypes from 'prop-types'

TwitterFollowCardWithState.propTypes = {
  formatUserName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};

export function TwitterFollowCardWithState ({formatUserName, userName='Unknown' , name='Unknown'}) {
  /* 
    // 01 el useState
    
    // Estas 3 lineas, son equivalentes...
    const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1]

    //... a esta:
    const [isFollowing, setIsFollowing] = useState(false)

  */
  const [isFollowing, setIsFollowing] = useState(false)

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
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
  </article>
  )
}
