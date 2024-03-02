import './App.css'
import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} type='text' placeholder='Avengers, Star Wars, Coco ...' />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
