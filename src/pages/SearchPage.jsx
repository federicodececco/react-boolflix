import MovieCard from '../components/MovieCard'
import { useTvMoviesContext } from '../contexts/MovieContext'
export default function SearchBarPage() {
  const { tvMoviesList } = useTvMoviesContext()
  return (
    <>
      <div className='bg-gray-500'>
        <div className='mx-auto grid max-w-7xl grid-cols-3 gap-3'>
          {tvMoviesList.films.map(elem => {
            return <MovieCard key={elem.id} movieTv={elem}></MovieCard>
          })}
          {tvMoviesList.tv.map(elem => {
            return <MovieCard key={elem.id} movieTv={elem}></MovieCard>
          })}
        </div>
      </div>
    </>
  )
}
