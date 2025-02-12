import MovieCard from "../components/MovieCard";
import { useMoviesContext } from "../contexts/MovieContext";
export default function SearchBarPage() {
  const { moviesList } = useMoviesContext();
  return (
    <>
      <div className="bg-gray-500">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3 ">
          {moviesList.map((elem) => {
            return <MovieCard key={elem.id} movie={elem}></MovieCard>;
          })}
        </div>
      </div>
    </>
  );
}
