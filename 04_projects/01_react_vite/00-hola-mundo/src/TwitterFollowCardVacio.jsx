import { useState } from 'react'
import './App.css'
import PropTypes from 'prop-types'

TwitterFollowCardVacio.propTypes = {
  formatUserName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};

export function TwitterFollowCardVacio () {
  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing) 
  }
  
  return (
    <article className='tw-followCard'>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
  </article>
  )
}
