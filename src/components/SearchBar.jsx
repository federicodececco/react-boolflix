import { useState } from "react";
import { useMoviesContext } from "../contexts/MovieContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMoviesList } = useMoviesContext();

  const handleSubmit = (e) => {
    let tvMovieArr = [];
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "8a7d513938b23a42af6d98f4db80eb64",
          query: search,
        },
      })
      .then((res) => {
        console.log("films:");
        console.log(res.data.results),
          res.data.results.forEach((element) => {
            tvMovieArr.push(element);
          });
      })
      .then(
        axios
          .get("https://api.themoviedb.org/3/search/tv", {
            params: {
              api_key: "8a7d513938b23a42af6d98f4db80eb64",
              query: search,
            },
          })
          .then((res) => {
            console.log("TvSeries:");
            console.log(res.data.results),
              res.data.results.forEach((element) => {
                tvMovieArr.push(element);
              }),
              setMoviesList(tvMovieArr);
          })
      );
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-white text-sm px-2"
        placeholder="search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button>cerca</button>
    </form>
  );
}
