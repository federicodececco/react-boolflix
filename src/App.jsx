import { useState, react } from "react";
import NavBar from "./components/NavBar";
import { SearchProvider } from "./contexts/MovieContext";
function App() {
  return (
    <>
      <SearchProvider>
        <NavBar></NavBar>
        <div>
          <h1></h1>
        </div>
      </SearchProvider>
    </>
  );
}

export default App;
