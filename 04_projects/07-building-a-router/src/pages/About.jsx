import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre Nosotros',
    button: 'Ir a la Home',
    description: 'Hola me llamo David y estoy creando un Router desde cero.'
  },
  en: {
    title: 'About us',
    button: 'Back to Home',
    description: 'Hi my name is David and Im creation a Router from scratch.'
  }
}

const getI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = getI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src='https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Foto de un bosque.'
        />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
