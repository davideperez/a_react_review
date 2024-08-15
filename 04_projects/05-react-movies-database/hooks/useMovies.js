import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef(search)

  // This useMemo avoids getMovies to build only when..
  // ..a search is submitted, and no when, for example..
  // .. a sort is done.
  const getMovies = useCallback(async ({ search }) => {
    console.log('Hi from getMovies, this is search: ', search)
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)

      // Updates the previousSearch ref for the next search, with the new search
      previousSearch.curren = search

      // Fetches the movies required by the user
      const searchResponse = await searchMovies(search)
      setMovies(searchResponse)
    } catch (err) {
      setError(err.message)
    } finally {
      // Both the try and the catch will pass to the the finally
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    if (!movies) return
    // console.log('sorting..')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
