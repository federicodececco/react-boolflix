export default function FrontCard({ img }) {
  return (
    <div>
      <img
        className="border border-solid border-white"
        src={`https://image.tmdb.org/t/p/w342` + img}
        alt="film poster"
      />
    </div>
  );
}
