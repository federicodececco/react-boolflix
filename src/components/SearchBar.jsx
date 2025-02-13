import { useState } from 'react'
import { useTvMoviesContext } from '../contexts/MovieContext'
import submitHandler from './submitHandler'
export default function SearchBar() {
  const [search, setSearch] = useState('')
  const { setTvMoviesList } = useTvMoviesContext()
  const handleSubmit = e => {
    e.preventDefault()
    const MoviesTv = submitHandler(search).then(res => {
      setTvMoviesList(res)
    })
  }
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
      <button className='text-white'>cerca</button>
    </form>
  )
}
