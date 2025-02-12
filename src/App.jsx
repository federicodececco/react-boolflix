import Header from "./components/Header";
import { SearchProvider } from "./contexts/MovieContext";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <>
      <SearchProvider>
        <Header></Header>
        <SearchPage></SearchPage>
      </SearchProvider>
    </>
  );
}

export default App;
