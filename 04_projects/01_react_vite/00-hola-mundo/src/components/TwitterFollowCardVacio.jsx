import { useState } from 'react'
import '../App.css'

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
