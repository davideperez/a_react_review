import { TwitterFollowCardWithBool } from './TwitterFollowCardWithBool'
import { TwitterFollowCardWithState } from './TwitterFollowCardWithState'
import { TwitterFollowCardWithChildren } from './TwitterFollowCardWithChildren'
import { TwitterFollowCardVacio } from './TwitterFollowCardVacio'

export default function App () {
  // 01
  // Esta funcion no se ejecuta en la prop del componente, solo es pasada como parametro
  // y luego ejecutada dentro del componente mismo. (ver componente )
  const myFormatUserNameFunction = (myUserName) => `@${myUserName}`

  // 02
  // Recordar que podemos pasar elementos por props, ejemplo:
  //const button = <button>Ejemplo</button>

  //03
  // Podemos pasar las props como un objeto tambien.
  // Pero esto es mala practica, puede tener sentido en casos donde el objeto es muy grande (son muchas props)
  // 1. Pero por lo gral se esta enviando una cantidad de info que no es necesaria.
  // 2. Por temas de optimizacion puede que el componente se re-renderize sin necesidad.
  // 3. Termina haciendo mas complejo entender que info le esta llegando a nuestro componente (por estar desacoplada la data )
  const midudev = { 
    isFollowing: true, 
    formatUserName: myFormatUserNameFunction, 
    userName: 'midudev',
    name:'Miguel Angel Durán'
  }

  return (
    <>
      <div>
        <TwitterFollowCardWithBool
          isFollowing={false}
          formatUserName={myFormatUserNameFunction}
          userName='react'
          name='React'
          />
        <TwitterFollowCardWithState
          {...midudev}
        />
        <TwitterFollowCardWithState
          isFollowing
          formatUserName={myFormatUserNameFunction}
          userName='cplusplus'
          name='C++'
          />
        <TwitterFollowCardWithChildren
          isFollowing
          formatUserName={myFormatUserNameFunction}
          userName='nodejs'
          > 
            NodeJS
        </TwitterFollowCardWithChildren>
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