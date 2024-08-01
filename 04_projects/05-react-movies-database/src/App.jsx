import { useRef } from 'react'
import './App.css'
import { useMovies } from '../hooks/useMovies'
import { Movies } from './components/Movies'

function App () {
  const { movies: mappedMovies } = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    //  const inputElement = inputRef.current
    //  const inputValue = inputElement.value
    const inputValue = inputRef.current.value
    console.log(inputValue)
  }
  return (
    <div className='page'>
      <header>
        <h1>Movies Database</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder='Avengers, The Matrix, Star Wars... ' />
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
