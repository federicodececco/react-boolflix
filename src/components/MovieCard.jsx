import { hasFlag } from "country-flag-icons";
export default function MovieCard({ title, titleOr, language, rating, img }) {
  return (
    <>
      <div className="py-4">
        <h1 className="text-blue-600">title={title}</h1>
        <h1>orignal title={titleOr}</h1>
        <h1>{language}</h1>
        <h1>rating={rating}</h1>
        <div>
          <img src={img} alt="film poster" />
        </div>
      </div>
    </>
  );
}
