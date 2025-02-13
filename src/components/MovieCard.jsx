import BackCard from './BackCard'
import FrontCard from './frontCard'
import actorsHandler from './actorsHandler'
import React, { useState, useEffect } from 'react'
export default function MovieCard({ movieTv }) {
  const [side, setSide] = useState(false)
  const [actors, setActors] = useState([])

  const handleMouseEnter = () => {
    setSide(true)
  }
  const handleMouseLeave = () => {
    setSide(false)
  }

  useEffect(() => {
    async function fetchActors() {
      const isMovie = !!movieTv.title
      const res = await actorsHandler(movieTv.id, isMovie)
      setActors(res)
    }
    fetchActors()
  }, [movieTv.id])

  return (
    <>
      <div
        className='p-2'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {side ? (
          <BackCard
            title={movieTv.title || movieTv.name}
            titleOr={movieTv.original_title || movieTv.original_name}
            vote={movieTv.vote_average}
            overview={movieTv.overview}
            actors={actors}
          />
        ) : (
          <FrontCard img={movieTv.poster_path} />
        )}
      </div>
    </>
  )
}
