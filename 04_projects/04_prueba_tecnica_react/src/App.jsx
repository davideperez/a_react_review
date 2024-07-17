import { useEffect, useState } from 'react'

const CAT_RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'
// const CAT_IMAGE_ENDPOINT = `https://cataas.com/cat/says/hello${firstWord}`

export function App () {
  const [fact, setFact] = useState('lorem impsum')
  
  useEffect(()=> {
    fetch(CAT_RANDOM_FACT_ENDPOINT)
      .then(response => response.json())
      .then(data => setFact(data.fact))
  },[])

  return (
    <main>
      <h1>App de gatitos!</h1>
      { fact && <p>{fact}</p> }
    </main>
  )
}