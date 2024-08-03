import { useState, useRef } from 'react'
import { searchMovies } from '../services/movies'
// import withResults from '../mock/with-results.json'

// let previousSearch = '' // Bad practice. Doing this, the useMovies hook..
// ..could be used just one time. This way of implementing it is asuming..
// ..the variable is unique.

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)

      // Updates the previousSearch ref for the next search, with the new search
      previousSearch.current = search
      // previousSearch = search // Bad practice. This line was using the let from outside the function.
      // Fetches the movies required by the user
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
