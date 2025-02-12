import MovieCard from "../components/MovieCard";
import { useMoviesContext } from "../contexts/MovieContext";
export default function SearchBarPage() {
  const { moviesList } = useMoviesContext();
  return (
    <>
      {moviesList.map((elem) => {
        return (
          <MovieCard
            key={elem.id}
            title={elem.title}
            titleOr={elem.original_title}
            language={elem.original_language}
            rating={elem.vote_average}
          ></MovieCard>
        );
      })}
    </>
  );
}
