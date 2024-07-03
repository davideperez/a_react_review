import '../App.css'
import PropTypes from 'prop-types'

TwitterFollowCardWithChildren.propTypes = {
  formatUserName: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export function TwitterFollowCardWithChildren ({children, formatUserName, userName, isFollowing }) {
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          alt={`Avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong className='tw-followCard-text'>{children}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName}>{text}</button>
      </aside>
  </article>
  )
}
