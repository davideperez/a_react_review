import { useState } from 'react'
// import withResults from '../mock/with-results.json'
import withoutResultsMovies from '../mock/no-results.json'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])

  // Getting the data from the API response
  const movies = responseMovies.Search

  // API response Mapping.
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      //  setResponseMovies(withResults)
      fetch(`https://www.omdbapi.com/?apikey=78f9892e&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
    } else {
      setResponseMovies(withoutResultsMovies)
    }
  }

  return { movies: mappedMovies, getMovies }
}
