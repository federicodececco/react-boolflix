export default function FrontCard({ img }) {
  const bgImage = `https://image.tmdb.org/t/p/w342${img} `

  return (
    <div
      style={{ '--image-url': `url(${bgImage})` }}
      className='h-100 border border-solid border-white bg-[image:var(--image-url)] bg-cover bg-no-repeat lg:h-125 xl:h-150'
    ></div>
  )

  return (
    <div>
      <img
        className='border border-solid border-white'
        src={`https://image.tmdb.org/t/p/w342` + img}
        alt='film poster'
      />
    </div>
  )
}
