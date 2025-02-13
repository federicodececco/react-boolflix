import Header from './components/Header'
import { SearchProvider } from './contexts/MovieContext'
import { ActorProvider } from './contexts/ActorContex'
import SearchPage from './pages/SearchPage'
function App() {
  return (
    <>
      <div className='h-screen bg-gray-500'>
        <SearchProvider>
          <ActorProvider>
            <Header></Header>
            <SearchPage></SearchPage>
          </ActorProvider>
        </SearchProvider>
      </div>
    </>
  )
}

export default App
