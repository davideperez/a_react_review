import { useState } from 'react'
import { searchMovies } from '../services/movies'
// import withResults from '../mock/with-results.json'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const searchResponse = await searchMovies(search)
    setMovies(searchResponse)
  }

  return { movies, getMovies }
}
