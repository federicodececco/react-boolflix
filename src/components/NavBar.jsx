import { useMoviesContext } from "../contexts/MovieContext";
import SearchBar from "./Searchbar";
export default function NavBar() {
  return (
    <div className="flex justify-around max-w-7xl mx-auto">
      <div className="text-red-500 text-2xl">BOOFLIX</div>
      <div>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}
