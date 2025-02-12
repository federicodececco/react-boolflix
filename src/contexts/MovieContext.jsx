import { createContext, useContext, useState } from "react";

const SearchDataContext = createContext();

const SearchProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);
  return (
    <SearchDataContext.Provider value={{ moviesList, setMoviesList }}>
      {children}
    </SearchDataContext.Provider>
  );
};
function useMoviesContext() {
  return useContext(SearchDataContext);
}

export { SearchProvider, useMoviesContext };
