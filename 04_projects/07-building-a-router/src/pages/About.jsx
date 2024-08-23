import { navigate } from '../App'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Foto de un bosque.' />
        <p>Hola me llamo David y estoy creando un Router desde cero.</p>
      </div>
      <button onClick={() => navigate('/')}>Ir a la Home</button>
    </>
  )
}
