import { createContext, useContext, useState } from 'react'

const SearchDataContext = createContext()

const SearchProvider = ({ children }) => {
  const [tvMoviesList, setTvMoviesList] = useState({ films: [], tv: [] })
  return (
    <SearchDataContext.Provider value={{ tvMoviesList, setTvMoviesList }}>
      {children}
    </SearchDataContext.Provider>
  )
}
function useTvMoviesContext() {
  return useContext(SearchDataContext)
}

export { SearchProvider, useTvMoviesContext }
