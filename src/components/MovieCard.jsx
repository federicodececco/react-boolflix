import BackCard from './BackCard'
import FrontCard from './frontCard'

import React, { useState, useEffect } from 'react'
export default function MovieCard({ movieTv }) {
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
            title={movieTv.title || movieTv.name}
            titleOr={movieTv.original_title || movieTv.original_name}
            vote={movieTv.vote_average}
            overview={movieTv.overview}
          />
        ) : (
          <FrontCard img={movieTv.poster_path} />
        )}
      </div>
    </>
  )
}
