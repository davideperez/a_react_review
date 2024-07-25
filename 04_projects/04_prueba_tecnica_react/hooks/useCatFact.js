import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/catsFacts'

export function useCatFact () {
  const [fact, setFact] = useState('')

  function refreshFact () {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
