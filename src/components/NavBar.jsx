import { useMoviesContext } from "../contexts/MovieContext";
import SearchBar from "./Searchbar";
export default function NavBar() {
  return (
    <div>
      <div></div>
      <div>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}
