const API_KEY = '78f9892e'

export const searchMovies = async (search) => {
  // If the search is empty we don't event attempt to do the fetching.
  if (search === '') return null

  // Fetch
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const data = await response.json()

    // Getting the specific data from the API response data
    const movies = data.Search

    // API response Mapping.
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

    return mappedMovies
  } catch (err) {
    throw new Error('Error Searching Movies: ', err)
  }
}

/*

// Version using fetch.
if (search) {
    //  setResponseMovies(withResults)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
      .then(res => res.json())
      .then(json => {
        setResponseMovies(json)
      })
  } else {
    setResponseMovies(withoutResultsMovies)
  }

*/
