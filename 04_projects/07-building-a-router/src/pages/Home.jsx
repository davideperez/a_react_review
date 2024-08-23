import { Link } from '../Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <img
        src='https://images.pexels.com/photos/10651174/pexels-photo-10651174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='Ruta en un bosque.'
        style={{
          width: '400px'
        }}
      />
      <p>Pagina de ejemplo para crear React Router desde cero.</p>
      <Link to='/about'>Sobre Nosotros</Link>
    </>
  )
}
