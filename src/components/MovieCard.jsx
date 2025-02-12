import BackCard from './BackCard'
import FrontCard from './frontCard'

import React, { useState } from 'react'
export default function MovieCard({ movie }) {
  const [side, setSide] = useState(false)
  const handleMouseEnter = () => {
    setSide(true)
  }
  const handleMouseLeave = () => {
    setSide(false)
  }
  return (
    <>
      <div
        className='p-2'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {side ? (
          <BackCard
            title={movie.title || movie.name}
            titleOr={movie.original_title || movie.original_name}
            vote={movie.vote_average}
            overview={movie.overview}
          />
        ) : (
          <FrontCard img={movie.poster_path} />
        )}
      </div>
    </>
  )
}
