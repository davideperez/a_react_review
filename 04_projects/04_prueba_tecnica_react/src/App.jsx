import { useEffect, useState } from 'react'
import './App.css'

const CAT_RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says'

let acumulador = 0


export function App () {

  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  // TODO: Error Handling.
  /*   const [factError, setFactError] = useState()
  const [imageError, setImageError] = useState() */

  // Fetches the random fact API.
  useEffect(()=> {
    fetch(CAT_RANDOM_FACT_ENDPOINT)
      .then(response => {
        // Error handler
        if (!response.ok) {
          setFactError(`Fetching the ${CAT_PREFIX_FACT_URL} API was not possible.`)
        }
        // 
        return response.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
          /* 
      // Forma con async await
      async function getRandomFact () {
        const response = await fetch(CAT_RANDOM_FACT_ENDPOINT)
        const data = await response.json()
        setFact(data.fact)
      }
      getRandomFact()
 */
  },[])

  // Fetches the Cat Images API
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    let url

    fetch(`${CAT_PREFIX_IMAGE_URL}/${threeFirstWords}?fontSize=50&fontColor=red&json=true`) //${threeFirstWords}?size=50&color=red&json=true
      .then(res => {
/*
        // TODO Handle Error if fact 
        if (!response.ok) {
          setImageError(`Fetching the ${CAT_PREFIX_IMAGE_URL} API was not possible.`)
        } */
        console.log('This is res: ', res)
        url = res.url
        url = url.replace('&json=true', '')
        setImageUrl(url)
/*       }).catch(err => {
        console.log(err)
      }) */
  }, [])
  })
  return (
    <main>
      <h1>App de gatitos!</h1>
      {
        imageUrl ? 
          <img src={`${imageUrl}`} alt={`Image extracted using the three first words of ${fact}`}/>
          :
          <p>⚠️ La API de Gatitos no estaria funcionando, chequeala en: <a href={CAT_PREFIX_IMAGE_URL}>{CAT_PREFIX_IMAGE_URL}</a></p>
      }
      { fact && <p>{fact}</p> }
    </main>
  )
}