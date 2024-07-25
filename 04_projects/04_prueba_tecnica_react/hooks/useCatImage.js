import { useEffect, useState } from 'react'
import { getCatImage, getCatImage2 } from '../services/catsImages'

export function useCatImage ({ fact }) {
  // Fetches the Cat Images API
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

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

  return { imageUrl, isLoading, error }
}
