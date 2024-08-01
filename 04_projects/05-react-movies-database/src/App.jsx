// import { useRef } from 'react'
import './App.css'
import { useMovies } from '../hooks/useMovies'
import { Movies } from './components/Movies'

function App () {
  const { movies: mappedMovies } = useMovies()
  // const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    // The current is the element:
    //  const inputElement = inputRef.current
    //  const inputValue = inputElement.value
    // const inputValue = inputRef.current.value
    // console.log(inputValue)

    console.log('FormData Puro: ', new window.FormData(event.target))
    // midu
    const fields = Object.fromEntries(new window.FormData(event.target))
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // const query = fields.get('query')
    console.log('FormData con Object.fromEntries()', fields)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies Database</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder='Avengers, The Matrix, Star Wars... ' />
          <input name='aaaaa' placeholder='Avengers, The Matrix, Star Wars... ' />
          <input name='ccccc' placeholder='Avengers, The Matrix, Star Wars... ' />
          <input name='ccccc' placeholder='Avengers, The Matrix, Star Wars... ' />
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
