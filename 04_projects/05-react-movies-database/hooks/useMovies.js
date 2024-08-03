import { useState } from 'react'
import { searchMovies } from '../services/movies'
// import withResults from '../mock/with-results.json'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(null)

      const searchResponse = await searchMovies(search)
      setMovies(searchResponse)
    } catch (err) {
      setError(err.message)
    } finally {
      // Both the try and the catch will pass to the the finally
      setLoading(false)
    }
  }

  return { movies, getMovies, loading, error }
}
