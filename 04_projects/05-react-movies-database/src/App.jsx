import './App.css'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useMovies } from '../hooks/useMovies'
import { Movies } from './components/Movies'
import debounce from 'just-debounce-it'
// Implementacion con debounce custom
// import useDebounce from '../hooks/useDebounce-v1'

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
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  // Implementacion con debounce custom
  // const debouncedValue = useDebounce(search, 2000)
  const { movies: mappedMovies, getMovies, loading } = useMovies({ search/* : debouncedValue */, sort })

  // Implementacion con debounce custom
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  )
  // Implementacion con debounce custom
  /* useEffect(() => {
    console.log('search: ', search)
    console.log('debouncedValue: ', debouncedValue)
    getMovies({ search })
  }, [debouncedValue]) */

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = (event) => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    // This is a prevalidation
    updateSearch(newSearch)
    // Implementacion con debounce de terceros
    debouncedGetMovies(newSearch)
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
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
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
