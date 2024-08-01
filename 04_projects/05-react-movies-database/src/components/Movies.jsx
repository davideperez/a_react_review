export function MoviesResults ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title} ({movie.year})</h3>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

export function NoMovieResults () {
  return (
    <p>The re are no movies with this search.</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <MoviesResults movies={movies} />
      : <NoMovieResults />
  )
}
