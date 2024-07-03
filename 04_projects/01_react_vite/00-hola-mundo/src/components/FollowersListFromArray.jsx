import { TwitterFollowCardWithState } from './TwitterFollowCardWithState'
import '../App.css'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Durán',
    isFollowing: true
  },
  {
    userName: 'johndoe',
    name: 'John Doe',
    isFollowing: true
  },  {
    userName: 'cplusplus',
    name: 'C++',
    isFollowing: true
  },  {
    userName: 'nodejs',
    name: 'NodeJS',
    isFollowing: true
  },
]

export default function FollowersListFromArray () {
  const myFormatUserNameFunction = (myUserName) => `@${myUserName}`
  return (
    <>
      <h1>Followers List From Array</h1>
      <div className='tw-followCard-container'>
      {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCardWithState
              formatUserName={myFormatUserNameFunction}
              initialIsFollowing={isFollowing}
              userName={userName}
              name={name}
              key={userName}
            />
          ))
        }
{/*         {
          users.map((user, index) => {
            const { userName, name, isFollowing } = user
            return (
            <TwitterFollowCardWithState
              formatUserName={myFormatUserNameFunction}
              initialIsFollowing={isFollowing}
              userName={userName}
              name={name}
              key={index}
            />
          )})
        } */}
      </div>
    </>
  )
}

/* Estilos en React //

  Pueden ser en linea en el style, pero deben ser pasados como un objeto. 
  Pero no es la mejor ni la mas comoda ni la correcta. 
  Aunque puede ser necesaria usarla en algun escenario donde el estilo no pueda ser definido a un nivel normal o para react native.

export default function App () {
  return (
    <article 
      style={
        {
          display:'flex',
          alignItems: 'center',
          color: '#fff',
        }
      }
    >
      <header>
        <img alt="Avatar del David Perez"  src="https://pbs.twimg.com/profile_images/1726703448064704512/_fZjk4kp_normal.jpg"/>
        <div>
          <stron>David Perez</stron>
          <span>@dave__ep</span>
        </div>
      </header>
      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  )
}

*/