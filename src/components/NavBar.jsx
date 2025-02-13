import { useTvMoviesContext } from '../contexts/MovieContext'
import SearchBar from './SearchBar'
export default function NavBar() {
  return (
    <div className='mx-auto flex max-w-7xl justify-around'>
      <div className='text-2xl text-red-500'>BOOFLIX</div>
      <div>
        <SearchBar></SearchBar>
      </div>
    </div>
  )
}
