
import Stars from './Stars'
export default function BackCard({ title, vote, titleOr, overview }) {
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
=======
import Stars from "./Stars";
export default function BackCard({ title, vote, titleOr }) {
  return (
    <>
      <div className="py-4 text-white">
        <h1 className="text-blue-600">{title}</h1>
        <h1>{titleOr}</h1>
        <h1>
          <Stars num={vote}></Stars>
        </h1>
      </div>
    </>
  );
>>>>>>> 58bf74ef7afedd52d43df5bb8b6551433f07aa1f
}
