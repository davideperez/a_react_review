import '../App.css'
import PropTypes from 'prop-types'

TwitterFollowCardWithBool.propTypes = {
  formatUserName: PropTypes.func,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};

export function TwitterFollowCardWithBool ({formatUserName, userName='Unknown' , name='Unknown', isFollowing}) {
  // 01
  // Notar que recien aqui se ejecuta la funcion formatUserName que pasa como parametro
  // desde el componente padre.
  
  // 02 Las PROPS son inmutables
  // Una vez que son pasadas como parametro. No podemos hacer:
  // userName = `@${userName}`
  // Ya que React tiene que tener la seguridad de lo que renderea
  // y se puede confundir. Estas modificando la fuente de la verdad.
  // Lo que se puede hacer es declarar una nueva constante:
  // const userNameWithAt = `@${userName}`

  // Logic
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
          <strong className='tw-followCard-text'>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName}>{text}</button>
      </aside>
  </article>
  )
}
