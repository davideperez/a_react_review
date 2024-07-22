import { useEffect, useState } from 'react'
import './App.css'

const CAT_RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'
// const CAT_IMAGE_ENDPOINT = `https://cataas.com/cat/says/hello${firstWord}`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says'

export function App () {

  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(()=> {
    fetch(CAT_RANDOM_FACT_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const threeFirstWords = fact.split(' ', 3).join(' ')
        let url

        fetch(`${CAT_PREFIX_IMAGE_URL}/${threeFirstWords}?fontSize=50&fontColor=red&json=true`) //${threeFirstWords}?size=50&color=red&json=true
          .then(res => {
            console.log('This is res: ', res)
            url = res.url
            url = url.replace('&json=true', '')
            setImageUrl(url)
          }).catch(err => {
            console.log(err)
          })
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

  return (
    <main>
      <h1>App de gatitos!</h1>
      { imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the three first words of ${fact}`}/> }
      { fact && <p>{fact}</p> }
      <p></p>
    </main>
  )
}