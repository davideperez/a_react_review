import { useEffect, useState } from 'react'
import './App.css'
import '../styles/button.css'
import '../styles/spinner.css'
import { getRandomFact } from '../services/catsFacts'
import { getCatImage, getCatImage2 } from '../services/catsImages'

// import Error from '../components/Error'

export function App () {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetches the random fact API.
  useEffect(() => {
    getRandomFact().then(newFact => {
      setFact(newFact)
    })
  }, [])

  // Fetches the Cat Images API
  useEffect(() => {
    setIsLoading(true)
    if (!fact) return

    getCatImage(fact).then(newImageUrl => {
      setImageUrl(newImageUrl)
    }).catch((err) => {
      getCatImage2(fact).then(newImageUrl => {
        console.log('🚀 ~ getCatImage ~ newImageUrl:', newImageUrl)
        console.log('This is err: ', err)
        setImageUrl(newImageUrl)
      }).catch(() => {
        setError('Error en la peticion getCatImage2')
      })
    }).finally(() => {
      setIsLoading(false)
    })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
    const newImageUrl = await getCatImage2(fact)
    setImageUrl(newImageUrl)
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
            ? <span class='loader' />
            : <img src={`${imageUrl}`} alt={`Image extracted using the three first words of ${fact}`} />
        }
        {error && <h2>{error}</h2>}
      </div>
      <button className='button-53' onClick={handleClick}>Actualizar</button>
    </main>
  )
}
