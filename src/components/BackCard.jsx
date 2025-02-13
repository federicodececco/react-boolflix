import Stars from './Stars'
import { useState } from 'react'
export default function BackCard({ title, vote, titleOr, overview, actors }) {
  return (
    <>
      <div className='h-100 border border-solid border-white bg-black px-3 py-4 text-white lg:h-125 xl:h-150'>
        <div>
          <span className='pr-2 font-bold text-white'>Titolo:</span>
          <span className='text-white'>{title}</span>
        </div>
        <div>
          <span className='pr-2 font-bold text-white'>Titolo originale:</span>
          <span className='text-white'>{titleOr}</span>
        </div>
        <div>
          {' '}
          <span className='pr-2 font-bold text-white'>Cast:</span>
          <span className='text-white'>
            {actors.map((elem, index) => {
              if (elem) return <>{elem.name},</>
              else return
            })}
          </span>
        </div>
        <div>
          <span className='pr-2 font-bold text-white'>Voto:</span>
          <span className='text-yellow-500'>
            <Stars num={vote}></Stars>
          </span>
        </div>
        <div className='no-scrollbar max-h-60 overflow-y-scroll'>
          <span className='pr-2 font-bold text-white'>Overview</span>
          <span className='overflow-hidden text-sm'>{overview}</span>
        </div>
      </div>
    </>
  )
}
