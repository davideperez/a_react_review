import './App.css'
import '../styles/button.css'
import '../styles/spinner.css'
import { useCatImage } from '../hooks/useCatImage'
import { useCatFact } from '../hooks/useCatFact'
import { Otro } from '../components/Otro'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl, isLoading, error } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }
  return (
    <main>
      <h1>Fetching APIs with .fetch()</h1>
      <div className='description'>
        <p>Retrieve a cat fact and a random image based on its first 4 words.</p>
        <p>Facts are retrieved from the {import.meta.env.PEXELS_URL} {import.meta.env.PEXELS_URL} API</p>
      </div>
      <div className='content'>
        {fact && <p className='fact'>{fact}</p>}
        {
          isLoading
            ? <span className='loader' />
            : <img src={`${imageUrl}`} alt={`Image extracted using the three first words of ${fact}`} />
        }
        {error && <h2>{error}</h2>}
      </div>
      <button className='button-53' onClick={handleClick}>Actualizar</button>
      {/* <Otro /> */}
    </main>
  )
}
