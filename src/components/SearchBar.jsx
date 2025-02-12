import { useState } from "react";
import { useMoviesContext } from "../contexts/MovieContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMoviesList } = useMoviesContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "8a7d513938b23a42af6d98f4db80eb64",
          query: search,
        },
      })
      .then((res) => {
        console.log(res), setMoviesList(res.data.results);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-black border-solid"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button>cerca</button>
    </form>
  );
}
