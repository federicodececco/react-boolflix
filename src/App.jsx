import Header from "./components/Header";
import { SearchProvider } from "./contexts/MovieContext";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <>
      <div className="bg-gray-500 h-screen">
        <SearchProvider>
          <Header></Header>
          <SearchPage></SearchPage>
        </SearchProvider>
      </div>
    </>
  );
}

export default App;
