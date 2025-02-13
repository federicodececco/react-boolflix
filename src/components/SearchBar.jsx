import { useEffect, useState } from 'react'
import { useTvMoviesContext } from '../contexts/MovieContext'
import submitHandler from './submitHandler'
import genreList from './genreList'
export default function SearchBar() {
  const [search, setSearch] = useState('')
  const [genres, setGenres] = useState([])
  const { setTvMoviesList } = useTvMoviesContext()
  const handleSubmit = e => {
    e.preventDefault()
    const MoviesTv = submitHandler(search).then(res => {
      setTvMoviesList(res)
    })
  }
  useEffect(() => {
    async function fetchGenres() {
      const res = await genreList()
      setGenres(res)
      console.log(res)
    }
    fetchGenres()
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='bg-white px-2 text-sm'
        placeholder='search...'
        value={search}
        onChange={e => {
          setSearch(e.target.value)
        }}
      />
      <select name='Genres' id='' className='bg-white px-2 text-sm'>
        <option value='' className='px-2 text-sm text-white'>
          genre
        </option>
        {genres.map((elem, index) => {
          return (
            <>
              <option className='px-2 text-sm' value={elem.name} key={index}>
                {elem.name}
              </option>
            </>
          )
        })}
      </select>
      <button className='text-white'>cerca</button>
    </form>
  )
}
