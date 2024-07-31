import './App.css'
import responseMovies from '../mock/with-results.json'
import withoutResultsMovies from '../mock/no-results.json'

function App () {
  const movies = responseMovies.Search
  console.log(movies)
  const hasMovies = movies?.length > 0

  return (
    <div className='page'>
      <header>
        <h1>Movies Database</h1>
        <form className='form'>
          <input placeholder='Avengers, The Matrix, Star Wars... '/> 
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        {
          hasMovies 
            ? (
              <ul>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title} ({movie.Year})</h3>
                      <img src={movie.Poster} alt={movie.Title}/>
                    </li>
                  ))
                }
              </ul>
            )
            : <p>There are no movies with this search.</p>
        }
      </main>
    </div>
  )
}

export default App
