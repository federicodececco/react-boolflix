export default function MovieCard({ title, titleOr, language, rating }) {
  return (
    <>
      <div>
        <h1>title={title}</h1>
        <h1>orignal title={titleOr}</h1>
        <h1>language={language}</h1>
        <h1>rating={rating}</h1>
      </div>
    </>
  );
}
