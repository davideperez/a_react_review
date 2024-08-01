import { useEffect, useState } from 'react'
import './App.css'
import { useMovies } from '../hooks/useMovies'
import { Movies } from './components/Movies'

function App () {
  const { movies: mappedMovies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }
  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)

    if (newQuery === '') {
      setError('Can\'t search for an empty movie.')
      return
    }

    if (newQuery.match(/^\d+$/)) {
      setError('Can\'t search a movie with a number.')
      return
    }

    if (newQuery.length < 3) {
      setError('Search should have a minimum of 3 characters.')
      return
    }

    setError(null)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies Database</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder='Avengers, The Matrix, Star Wars... ' />
          {error && <p className='error'>{error}</p>}
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
