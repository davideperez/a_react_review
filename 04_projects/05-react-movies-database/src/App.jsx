import { useEffect, useState, useRef } from 'react'
import './App.css'
import { useMovies } from '../hooks/useMovies'
import { Movies } from './components/Movies'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    // This are validations
    if (search === '') {
      setError('Can\'t search for an empty movie.')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('Can\'t search a movie with a number.')
      return
    }
    if (search.length < 3) {
      setError('Search should have a minimum of 3 characters.')
      return
    }
    setError(null)
  }, [search])
  return { search, updateSearch, error }
}

function App () {
  const { search, updateSearch, error } = useSearch()
  const { movies: mappedMovies, getMovies, loading } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    // const newQuery = event.target.value
    // This is a prevalidation
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies Database</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars... '
          />
          {error && <p className='error'>{error}</p>}
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        {
          loading ? <p className='loading'>Loading.. </p> : <Movies movies={mappedMovies} />
        }
      </main>
    </div>
  )
}

export default App
