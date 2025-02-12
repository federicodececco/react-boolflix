import { useState, react } from "react";
import NavBar from "./components/NavBar";
import { SearchProvider } from "./contexts/MovieContext";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <>
      <SearchProvider>
        <NavBar></NavBar>
        <SearchPage></SearchPage>
      </SearchProvider>
    </>
  );
}

export default App;
